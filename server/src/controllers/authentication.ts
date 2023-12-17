import express from 'express';

import { getUserByEmail, createUser } from '../services/users';
import { authentication, createSalt, createSessionToken, createJWT } from '../helpers/index';

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({notification: "Email already registered"});
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

    // create JWT with expiry time of 10 minutes
    const JWT = createJWT(
      user._id.toString(),
      Date.now(),
      Date.now() + 10 * 60 * 1000,
    );

    res.cookie('A@ACADEMY-JWT',
      JWT,
      {
        httpOnly: true,
        domain: 'localhost',
        sameSite: 'lax',
        path: '/'
      });

    // TODO: Change secure to true when production ready
    res.cookie(
      'A@ACADEMY-SESSION',
      sessionToken,
      { httpOnly: true, domain: 'localhost', path: '/', secure: false });

    user.authentication = undefined;

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    return res.status(200).json(user).end();

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
      { httpOnly: true, domain: 'localhost', path: '/', secure: false, sameSite: 'lax', maxAge: 60 * 60 * 1000 });

    // TODO: Change secure to true when production ready
    res.cookie(
      'A@ACADEMY-SESSION',
      user.authentication.sessionToken,
      { httpOnly: true, domain: 'localhost', path: '/', secure: false, sameSite: 'lax', maxAge: 60 * 60 * 1000 });

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