import { Request, Response } from "express";
import { getUserByEmail, createUser, } from "../db/users";
import { createSessionToken, createSalt, authentication, createJWT } from "../helpers"
import dotenv from 'dotenv';

dotenv.config();

export const oauthRedirectFB = async (req: Request, res: Response) => {
  const COOKIE_URL = process.env.APP_COOKIE_URL
  const { state, code, scope, authUser, prompt } = req.query;
  const tokenEndpoint = 'https://graph.facebook.com/v18.0/oauth/access_token';

  const options = new URLSearchParams(
    {
      client_id: process.env.FACEBOOK_OAUTH_CLIENT_ID,
      redirect_uri: process.env.FACEBOOK_OAUTH_REDIRECT_URL,
      client_secret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
      code: code as string
    }
  )

  const tokenQuerySearch = `${tokenEndpoint}?${options.toString()}`;
  const token = await fetch(tokenQuerySearch)
  const { access_token, token_type, expires_in } = await token.json();

  const userEndpoint = `https://graph.facebook.com/v18.0/me?fields=email,name`

  const userInfo = await fetch(userEndpoint, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  })

  const userData = await userInfo.json();
  const userByEmail = await getUserByEmail(userData.email).select('+email +authentication.salt +authentication.password')

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