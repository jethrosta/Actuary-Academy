"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controllers/authentication");
exports.default = (router) => {
    router.post('/v2/auth/register', authentication_1.register);
    router.post('/v2/auth/login', authentication_1.login);
};
//# sourceMappingURL=authentication.js.map