import mongoose from "mongoose";
import Joi from "joi";

import { CartDocument } from "./cart";

interface SessionTokenDocument extends mongoose.Document {
  token: string;
  expiresAt: Date;
}

const SessionTokenSchema = new mongoose.Schema<SessionTokenDocument>({
  token: { type: String, required: false },
  expiresAt: { type: Date, required: false },
});

interface AuthenticationDocument extends mongoose.Document {
  password: string;
  salt: string;
  sessionToken: SessionTokenDocument;
}

const AuthenticationSchema = new mongoose.Schema<AuthenticationDocument>({
  password: { type: String, required: true },
  salt: { type: String, required: true },
  sessionToken: { type: SessionTokenSchema },
});

export const userSchemaValidate = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  // authentication: Joi.
});

export interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  province: string;
  gender: string;
  dateOfBirth: string;
  authentication: AuthenticationDocument;
  // cart: Array<{ course: string }>;
  cart: CartDocument[];
  // courses: Array<string>;
  tutor_packages: string;
  academy_packages: string;
  endDate: Date;
};

const tutorPackages = ['mahasiswa', 'umum', 'none'];
const academyPackages = ['Paket Pembahasan Soal 6 Bulan',
                         'Paket Pembahasan Soal Lifetime',
                         'Paket Lengkap 6 Bulan',
                         'Paket Lengkap Lifetime',
                         'none'
                        ];

const UserSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  city: { type: String, required: false },
  province: { type: String, required: false },
  gender: { type: String, required: false },
  dateOfBirth: { type: String, required: false },
  authentication: { type: AuthenticationSchema, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  tutor_packages: { 
    type: String,
    enum: tutorPackages,
    default: 'none',
  },
  academy_packages: {
    type: String,
    enum: academyPackages,
    default: 'none',
  },
  endDate: { type: Date, default: null }
});

export const UserModel = mongoose.model("User", UserSchema);
