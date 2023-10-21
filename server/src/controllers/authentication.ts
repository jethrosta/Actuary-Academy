import express from 'express';

import { getUserByEmail, createUser, UserDocument } from '../db/users';
import { authentication, createSalt, createSessionToken, createJWT } from '../helpers';
import { sendMail, decryptData } from '../helpers/email';

import dotenv from 'dotenv'
dotenv.config();
const COOKIE_URL: string = process.env.APP_COOKIE_URL;

export const sendRegisterEmail = async (req: express.Request, res: express.Response) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.sendStatus(400);
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.sendStatus(403);
  }

  const sent = await sendMail(email, name, password);

  if (sent == false) {
    return res.status(400).send({ notification: 'Email is not valid' }).end();
  } else {
    return res.status(200).send({ notification: 'Verification link has been sent to your email!' }).end();
  }
}

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const verification = req.params.token
    const queryParam = await decryptData(verification, process.env.SERVER_EMAIL_ENCRYPTION_KEY);

    const modifiedString: string = queryParam.replace(/&(?![a-zA-Z]+=)/g, '|');
    const authPairs: string[] = modifiedString.split('&');
    const authObject: Record<string, string> = {};

    for (const pair of authPairs) {
      const [key, value]: string[] = pair.split('=');
      authObject[key] = value.replace(/\|/g, '&');
    }

    const { email, password, name } = authObject;

    if (!email || !password || !name) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.redirect(process.env.frontend + '/login');
    }

    const salt = createSalt();
    const sessionToken = createSessionToken();

    const user = await createUser({
      email,
      name,
      authentication: {
        salt: salt,
        password: authentication(salt, password),
        sessionToken: {
          token: sessionToken.token,
          expiresAt: sessionToken.expiresAt
        }
      }
    });

    const JWT = createJWT(
      user._id.toString(),
      Date.now(),
      Date.now() + 10 * 60 * 1000,
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

    // TODO: Change secure to true when production ready
    res.cookie(
      'A@ACADEMY-SESSION',
      sessionToken,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 });

    user.authentication = undefined;

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    return res.redirect(process.env.frontend + '/login');

  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email).select(
      '+authentication.salt +authentication.password');

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(403);
    }

    const sessionToken = createSessionToken();

    const JWT = createJWT(
      user._id.toString(),
      Date.now(),
      Date.now() + 10 * 60 * 1000,
    );

    user.authentication.sessionToken.token = authentication(sessionToken.token, user._id.toString());
    user.authentication.sessionToken.expiresAt = sessionToken.expiresAt;

    await user.save();

    res.cookie(
      'A@ACADEMY-JWT',
      JWT,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, sameSite: 'none', maxAge: 30 * 24 * 60 * 60 * 1000 });

    // TODO: Change secure to true when production ready
    res.cookie(
      'A@ACADEMY-SESSION',
      user.authentication.sessionToken,
      { httpOnly: true, domain: COOKIE_URL, path: '/', secure: true, sameSite: 'none', maxAge: 30 * 24 * 60 * 60 * 1000 });

    user.authentication = undefined;

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    return res.status(200).json(user).end();
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const logout = async (req: express.Request, res: express.Response) => {
  try {
    res.clearCookie('A@ACADEMY-JWT', { path: '/', domain: COOKIE_URL, secure: true, sameSite: 'none' });
    res.clearCookie('A@ACADEMY-SESSION', { path: '/', domain: COOKIE_URL, secure: true, sameSite: 'none' });
    return res.status(200).send({ message: 'logged out' }).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: 'Failed to log out' }).end();
  }
}