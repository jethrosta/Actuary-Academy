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
    const { link, title } = req.body;

    if (!link && !title) {
      return res.sendStatus(400);
    }

    try {
      const user = await createContent({
        link,
        title,
      });

      return res.status(200).json(user).end();
    } catch (err) {
      res.json("Cannot create Content");
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(400).json("Cannot access content create function");
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
