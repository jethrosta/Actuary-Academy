"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.isOwner = void 0;
const lodash_1 = require("lodash");
const users_1 = require("../db/users");
const helpers_1 = require("../helpers");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = 'A@Academy2023-DEVELOPED-BY-JETHRO&DANDY-ZICKY-DIVALDY';
const isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const currentUserId = (0, lodash_1.get)(req, 'identity._id');
        const sessionToken = req.cookies['A@ACADEMY-SESSION'];
        const JWT = req.cookies['A@ACADEMY-JWT'];
        if (!currentUserId) {
            return res.sendStatus(400);
        }
        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }
        if (!(0, helpers_1.isSessionTokenValid)(sessionToken)) {
            console.log('Session token expired');
        }
        next();
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.isOwner = isOwner;
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies['A@ACADEMY-SESSION'];
        const JWT = req.cookies['A@ACADEMY-JWT'];
        let decodedJWT;
        try {
            decodedJWT = jsonwebtoken_1.default.verify(JWT, SECRET);
        }
        catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
        if (!decodedJWT) {
            return res.sendStatus(400);
        }
        // check JWT expiration date
        if (Date.now() > decodedJWT.exp) {
            // Handle expired JWT by refreshing new JWT and use SessionToken instead
            // if the SessionToken is expired, return unauthenticated and log out from the main application
            const user = await (0, users_1.getUserBySessionToken)(sessionToken.token);
            if (!user) {
                return res.sendStatus(400);
            }
            if (!(0, helpers_1.isSessionTokenValid)(user.authentication.sessionToken)) {
                return res.sendStatus(401);
            }
            const newJWT = (0, helpers_1.createJWT)(user._id.toString(), Date.now(), Date.now() + 15 * 60 * 1000);
            res.cookie('A@ACADEMY-JWT', newJWT, { domain: 'localhost', path: '/' });
            decodedJWT = jsonwebtoken_1.default.verify(newJWT.toString(), SECRET);
        }
        const existingUser = await (0, users_1.getUserById)(decodedJWT.sub);
        if (!existingUser) {
            return res.status(403).json({ notification: 'User does not exist' });
        }
        req.userId = decodedJWT.sub;
        (0, lodash_1.merge)(req, { identity: existingUser });
        return next();
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=index.js.map