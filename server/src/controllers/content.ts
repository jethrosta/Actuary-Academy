import express from "express";

import { createContent, getContentById } from "../db/content";
import {
  authentication,
  createSalt,
  createSessionToken,
  createJWT,
} from "../helpers/index";

export const content = async (req: express.Request, res: express.Response) => {
  try {
    const { contentLink } = req.body;

    if (!contentLink) {
      return res.sendStatus(400);
    }

    try {
      const user = await createContent({
        contentLink,
      });

      return res.status(200).json(user).end();
    } catch (err) {
      res.json("Cannot create Content");
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(400).json("Cannot access testimoni function");
  }
};

export const getSpecificContent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const users = await getContentById(id);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res
      .sendStatus(400)
      .json("Cannot access getSpecificContent function");
  }
};
