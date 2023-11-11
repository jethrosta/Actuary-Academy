import express from "express";
import {
  createTestimoni,
  getTestimoni,
  deleteTestiById,
} from "../db/testimonies";
import { RequestWithJWT } from "middlewares";
import { getUserById, getUserBySessionToken } from "../db/users";
import { getUserByName } from "../db/testimonies";

export const testimoni = async (req: RequestWithJWT, res: express.Response) => {
  try {
    const user = await getUserById(req.userId);
    const cek = await getUserByName(user.name);
    if (cek) {
      return res.status(400).json({ notification: "Testimoni already filled" });
    }

    const username = user.name;

    const { desTestimoni } = req.body;

    if (!desTestimoni) {
      return res.sendStatus(400);
    }

    try {
      const testi = await createTestimoni({
        desTestimoni,
        username,
      });

      return res.status(200).json(testi).end();
    } catch (err) {
      res.json("Cannot create testimoni");
    }
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
  req: RequestWithJWT,
  res: express.Response
) => {
  try {
    const user = await getUserById(req.userId);
    const { id } = user.id;
    const deletedTesti = await deleteTestiById(id);
    return res.json(deletedTesti);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
