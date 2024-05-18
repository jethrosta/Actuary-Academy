import express from 'express';
import { registerUser, getAllUsers, getCurrentUser, updateCurrentUser, deleteUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
	router.post('/v2/users', registerUser);
	router.get('/v2/users', isAuthenticated, getAllUsers);
  	router.get('/v2/users/me', isAuthenticated, getCurrentUser);
  	router.put('/v2/users/:id', isAuthenticated, updateCurrentUser);
  	router.delete('/v2/users/:id', isAuthenticated, isOwner, deleteUser);
};
