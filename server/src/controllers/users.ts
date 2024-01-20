import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserbyId,
  deleteUserById,
} from "../services/users";
import { userSchemaValidate } from "../db/users";
import { RequestWithJWT } from "../middlewares/index";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const { error, value } = userSchemaValidate.validate(data);

    if (error) {
      res.send(error.message);
    } else {
      const user = await createUser(value);
      res.status(201).send(user);
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const getCurrentUser = async (
  req: RequestWithJWT,
  res: express.Response
) => {
  try {
    const user = await getUserById(req.userId);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const updateCurrentUser = async (
  req: RequestWithJWT & express.Request,
  res: express.Response
) => {
  try {
    const user = await updateUserbyId(req.params.id, req.body);
    return res.json({message: "success", userData: user})
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
