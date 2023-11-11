import express from 'express';
import { deleteUserById, getUsers, getUserById } from '../db/users';
import { RequestWithJWT } from 'middlewares';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

export const getCurrentUser = async (req: RequestWithJWT, res: express.Response) => {
  try {
    const user = await getUserById(req.userId);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};