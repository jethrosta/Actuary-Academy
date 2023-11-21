"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWithLine = exports.authentication = exports.isSessionTokenValid = exports.createSalt = exports.createJWT = exports.createSessionToken = exports.SECRET = void 0;
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = 'A@Academy2023-DEVELOPED-BY-JETHRO&DANDY-ZICKY-DIVALDY';
/**
  * Create session token
  * @returns {SessionToken}
  */
const createSessionToken = () => {
    const token = crypto_1.default.randomBytes(2048).toString('base64');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);
    return { token, expiresAt };
};
exports.createSessionToken = createSessionToken;
/**
 *
 * @param {String} sub - User's identity._id
 * @param {Number} iat - Issued at creation
 * @param {Number} exp - Expired at creation
 * @returns
 */
const createJWT = (sub, iat, exp) => {
    const claims = {
        'sub': sub,
        'iat': iat,
        'exp': exp,
    };
    const token = jsonwebtoken_1.default.sign(claims, exports.SECRET);
    return token;
};
exports.createJWT = createJWT;
const createSalt = () => crypto_1.default.randomBytes(512).toString('base64');
exports.createSalt = createSalt;
const isSessionTokenValid = (token) => {
    const expiresAt = new Date(token.expiresAt);
    const isValid = Date.now() < expiresAt.getTime();
    return isValid;
};
exports.isSessionTokenValid = isSessionTokenValid;
const authentication = (salt, password) => {
    return crypto_1.default.createHmac('sha256', [salt, password].join('/')).update(exports.SECRET).digest('hex');
};
exports.authentication = authentication;
// Debugging helper functions
function logWithLine(message) {
    const error = new Error();
    const lineNumber = error.stack?.split('\n')[2]?.split(':')[1];
    const programPath = __filename;
    const programName = programPath.split('/').slice(-2).join('/');
    console.log(`(DEBUG -> ${programName}:${lineNumber}) ${message}`);
}
exports.logWithLine = logWithLine;
//# sourceMappingURL=index.js.map