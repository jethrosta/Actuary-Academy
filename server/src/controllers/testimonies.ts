import express from "express";
import {
  createTestimoni,
  getTestimoni,
  deleteTestiById,
} from "../db/testimonies";
import { RequestWithJWT } from "middlewares";
import { getUserById, getUserBySessionToken } from "../db/users";

export const testimoni = async (req: RequestWithJWT, res: express.Response) => {
  try {
    // const userId = req.userId;
    // const user = await getUserBySessionToken;
    const user = await getUserById(req.userId);

    if (user) {
      return res.status(400).json({ notification: "Testimoni already filled" });
    }
    const username = user.name;

    const { desTestimoni } = req.body;

    // if (!desTestimoni || !username) {
    //   return res.sendStatus(400);
    // }

    //   const existingUser = await getUserByEmail(email);

    //   if (existingUser) {
    //     return res.sendStatus(400);
    //   }

    // const salt = createSalt();
    // const sessionToken = createSessionToken();
    try {
      const testi = await createTestimoni({
        desTestimoni,
        username,
        // authentication: {
        //   salt: salt,
        //   // password: authentication(salt, password),
        //   sessionToken: {
        //     token: sessionToken.token,
        //     expiresAt: sessionToken.expiresAt,
        //   },
        // },
      });

      return res.status(200).json(testi).end();
    } catch (err) {
      res.json("Cannot create testimoni");
    }

    // create JWT with expiry time of 10 minutes
    //   const JWT = createJWT(
    //     user._id.toString(),
    //     Date.now(),
    //     Date.now() + 10 * 60 * 1000,
    //   );

    //   res.cookie('A@ACADEMY-JWT',
    //     JWT,
    //     {
    //       httpOnly: true,
    //       domain: 'localhost',
    //       sameSite: 'lax',
    //       path: '/'
    //     });

    // TODO: Change secure to true when production ready
    //   res.cookie(
    //     'A@ACADEMY-SESSION',
    //     sessionToken,
    //     { httpOnly: true, domain: 'localhost', path: '/', secure: false });

    //   user.authentication = undefined;

    //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //   res.header('Access-Control-Allow-Headers', 'Content-Type');
    //   res.header('Access-Control-Allow-Credentials', 'true');
  } catch (err) {
    console.log(err);
    return res.sendStatus(400).json("Cannot access testimoni function");
  }
};

export const getAllTestimoni = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getTestimoni();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400).json("Cannot access getAllTestimoni function");
  }
};

export const deleteTesti = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedTesti = await deleteTestiById(id);
    return res.json(deletedTesti);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
