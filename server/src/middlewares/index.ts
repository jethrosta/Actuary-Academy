import express from 'express'
import { get, merge } from 'lodash'

import { getUserBySessionToken, getUserByEmail, getUserById } from '../db/users'
import { SessionToken, createJWT, isSessionTokenValid, logWithLine } from '../helpers'

import jwt from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'

const SECRET: string = 'A@Academy2023-DEVELOPED-BY-JETHRO&DANDY-ZICKY-DIVALDY';

export interface RequestWithJWT extends express.Request {
  userId: string;
}

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;
    const sessionToken = req.cookies['A@ACADEMY-SESSION']
    const JWT = req.cookies['A@ACADEMY-JWT']

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    if (!isSessionTokenValid(sessionToken)) {
      console.log('Session token expired');

    }

    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: RequestWithJWT,
  res: express.Response,
  next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['A@ACADEMY-SESSION'];
    const JWT = req.cookies['A@ACADEMY-JWT'];

    let decodedJWT: JwtPayload;

    try {
      decodedJWT = jwt.verify(JWT, SECRET) as JwtPayload;
    } catch (error) {
      console.log(error);
      return res.status(400).send({message: "Cookies not set"});
    }


    if (!decodedJWT) {
      return res.sendStatus(400);
    }

    // check JWT expiration date
    if (Date.now() > decodedJWT.exp) {
      // Handle expired JWT by refreshing new JWT and use SessionToken instead
      // if the SessionToken is expired, return unauthenticated and log out from the main application
      const user = await getUserBySessionToken(sessionToken.token)
      if (!user) {
        return res.sendStatus(400);
      }
      if (!isSessionTokenValid(user.authentication.sessionToken as SessionToken)) {
        return res.sendStatus(401);
      }
      const newJWT = createJWT(
        user._id.toString(),
        Date.now(),
        Date.now() + 15 * 60 * 1000
      )
      res.cookie('A@ACADEMY-JWT',
        newJWT,
        { domain: '139.59.228.10', path: '/' });
      decodedJWT = jwt.verify(newJWT.toString(), SECRET) as JwtPayload;
    }

    const existingUser = await getUserById(decodedJWT.sub);

    if (!existingUser) {
      return res.status(403).json({notification: 'User does not exist'});
    }

    req.userId = decodedJWT.sub

    merge(req, { identity: existingUser });

    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}
