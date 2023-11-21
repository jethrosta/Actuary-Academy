"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../controllers/users");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/v2/users', middlewares_1.isAuthenticated, users_1.getAllUsers);
    router.get('/v2/users/me', middlewares_1.isAuthenticated, users_1.getCurrentUser);
    router.delete('/v2/users/:id', middlewares_1.isAuthenticated, middlewares_1.isOwner, users_1.deleteUser);
};
//# sourceMappingURL=users.js.map