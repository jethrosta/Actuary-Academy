"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getCurrentUser = exports.getAllUsers = void 0;
const users_1 = require("../db/users");
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, users_1.getUsers)();
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.getAllUsers = getAllUsers;
const getCurrentUser = async (req, res) => {
    try {
        const user = await (0, users_1.getUserById)(req.userId);
        return res.json(user);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.getCurrentUser = getCurrentUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await (0, users_1.deleteUserById)(id);
        return res.json(deletedUser);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map