import * as crypto from 'crypto';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
import fs from 'fs';

dotenv.config();

const ENCRYPTION_ALGORITHM = 'aes-256-gcm';

async function encryptData(data: string, passphrase: string) {
  // Generate a key from the passphrase using PBKDF2
  const salt = crypto.randomBytes(16); // Generate a random salt
  const key = crypto.pbkdf2Sync(passphrase, salt, 10000, 32, 'sha256');

  // Create an initialization vector (IV)
  const iv = crypto.randomBytes(16);

  // Create a cipher instance
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, iv);

  // Encrypt the data
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');

  // Get the authentication tag
  const authTag = cipher.getAuthTag();

  // Combine the salt, IV, and encrypted data
  const encryptedDataWithSaltAndIV = `${salt.toString('hex')}:${iv.toString('hex')}:${encryptedData}:${authTag.toString('hex')}`;

  return encryptedDataWithSaltAndIV;
}

export async function decryptData(encryptedDataWithSaltAndIV: string, passphrase: string) {
  // Split the combined string into its components
  const [saltHex, ivHex, encryptedDataHex, authTagHex] = encryptedDataWithSaltAndIV.split(':');
  const salt = Buffer.from(saltHex, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedData = Buffer.from(encryptedDataHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');

  // Generate the key from the passphrase and salt using PBKDF2
  const key = crypto.pbkdf2Sync(passphrase, salt, 10000, 32, 'sha256');

  // Create a decipher instance
  const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, key, iv);

  // Set the authentication tag
  decipher.setAuthTag(authTag);

  // Decrypt the data
  const decryptedData = decipher.update(encryptedData, null, 'utf-8');
  return decryptedData + decipher.final('utf-8');
}

export const sendMail = async (email: string, name: string, password: string) => {
  const dataToEncrypt = `email=${email}&password=${password}&name=${name}`;
  const encryptedData = await encryptData(dataToEncrypt, process.env.SERVER_EMAIL_ENCRYPTION_KEY);

  const verificationLink = `${process.env.SERVER_URL}/v2/auth/verification/${encryptedData}`

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SERVER_EMAIL,
      pass: process.env.SERVER_EMAIL_PASSWORD
    }
  });

  let isSent: boolean;

  fs.readFile('src/helpers/email/email.html', 'utf-8', (err, data) => {

    let updatedData = data.replace(/<a href=".*?" class="button">/g, `<a href="${verificationLink}" class="button">`);

    let mailOptions = {
      from: 'actuaryacademy.backend@gmail.com',
      to: email,
      subject: 'Actuary Academy - Sign Up Verification',
      html: updatedData
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        isSent = false;
      } else {
        isSent = true;
      }
    });
  })
  return isSent
}