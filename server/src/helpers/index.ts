import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export const SECRET = 'A@Academy2023-DEVELOPED-BY-JETHRO&DANDY-ZICKY-DIVALDY';

export interface SessionToken {
  token: string;
  expiresAt: Date;
}

/**
  * Create session token
  * @returns {SessionToken} 
  */
export const createSessionToken = ():SessionToken => {
  const token = crypto.randomBytes(2048).toString('base64');
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30)
  return { token, expiresAt }
}

/**
 * 
 * @param {String} sub - User's identity._id
 * @param {Number} iat - Issued at creation
 * @param {Number} exp - Expired at creation
 * @returns 
 */
export const createJWT = (
  sub: String,
  iat: Number,
  exp: Number,
  ): String => {

  const claims = {
    'sub': sub,
    'iat': iat,
    'exp': exp,
  }

  const token = jwt.sign(claims, SECRET);

  return token;
}

export const createSalt = () => crypto.randomBytes(512).toString('base64');

export const isSessionTokenValid = (token: SessionToken): boolean => {
  const expiresAt = new Date(token.expiresAt);
  const isValid = Date.now() < expiresAt.getTime(); 
  return isValid;
}

export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

// Debugging helper functions

export function logWithLine(message: string) {
  const error = new Error();
  const lineNumber = error.stack?.split('\n')[2]?.split(':')[1];
  const programPath = __filename;
  const programName = programPath.split('/').slice(-2).join('/');
  console.log(`(DEBUG -> ${programName}:${lineNumber}) ${message}`);
}
