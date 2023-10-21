import { Request, Response } from "express";
import { getUserByEmail, createUser, } from "../db/users";
import { createSessionToken, createSalt, authentication, createJWT } from "../helpers"
import dotenv from 'dotenv';

dotenv.config();

export const oauthRedirect = async (req: Request, res: Response) => {
  const COOKIE_URL = process.env.APP_COOKIE_URL
  const { state, code } = req.query;
  const tokenEndpoint = 'https://oauth2.googleapis.com/token';

  const tokenRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'code': code as string,
      'client_id': process.env.GOOGLE_OAUTH_CLIENT_ID,
      'client_secret': process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      'redirect_uri': process.env.GOOGLE_OAUTH_REDIRECT_URL,
      'grant_type': 'authorization_code',
    }),
  };

  const token = await fetch(tokenEndpoint, tokenRequest)
  const data = await token.json();

  const userEndpoint = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${data.access_token}`
  const userInfo = await fetch(userEndpoint)
  const userData = await userInfo.json();
  const [err, userByEmail] = await getUserByEmail(userData.email).select('+email +authentication.salt +authentication.password')
    .then(user => [null, user], err => [err, null]);

  if (err != null) {
    return res.status(500).json({ error: "Server error" })
  }

  /* * check if user already exists, then log in
       for google authentication credentials, i would just set the password to be the 
       and authentication is */

  if (userByEmail == null) {
    const sessionToken = createSessionToken();
    const salt = createSalt();

    const user = await createUser({
      name: userData.name,
      email: userData.email,
      authentication: {
        password: authentication(salt, userData.id),
        salt: authentication(salt, userData.password),
        sessionToken: {
          token: sessionToken.token,
          expiresAt: sessionToken.expiresAt
        },
      }
    })

    const JWT = createJWT(
      user._id.toString(),
      Date.now(),
      Date.now() + 10 * 60 * 1000
    );

    res.cookie('A@ACADEMY-JWT',
      JWT,
      {
        httpOnly: true,
        domain: COOKIE_URL,
        sameSite: 'none',
        secure: true,
        path: '/',
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

    res.cookie(
      'A@ACADEMY-SESSION',
      sessionToken,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 }
    );

    user.authentication = undefined;

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    return res.redirect(state as string);
  }

  else {
    const sessionToken = createSessionToken();

    const JWT = createJWT(
      userByEmail._id.toString(),
      Date.now(),
      Date.now() + 10 * 60 * 1000,
    )

    userByEmail.authentication.sessionToken.token = authentication(sessionToken.token, userByEmail._id.toString());
    userByEmail.authentication.sessionToken.expiresAt = sessionToken.expiresAt;

    await userByEmail.save();

    res.cookie(
      'A@ACADEMY-JWT',
      JWT,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, sameSite: 'none', maxAge: 30 * 24 * 60 * 60 * 1000 });

    res.cookie(
      'A@ACADEMY-SESSION',
      userByEmail.authentication.sessionToken,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, sameSite: 'none', maxAge: 30 * 24 * 60 * 60 * 1000 });

    userByEmail.authentication = undefined;

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    return res.redirect(state as string);
  }
}
