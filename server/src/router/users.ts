import express from 'express';
import { getAllUsers, getCurrentUser, deleteUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/v2/users', isAuthenticated, getAllUsers);
  router.get('/v2/users/:id', isAuthenticated, getCurrentUser); 
  router.delete('/v2/users/:id', isAuthenticated, isOwner, deleteUser);
};