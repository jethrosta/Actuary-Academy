// TODO: Refactor user models

import mongoose from "mongoose";
import Joi from "joi";

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
	name: { 
		type: String, 
		required: true 
	},
  	email: { 
		type: String, 
		required: true,
		unique: true 
	},
  	phoneNumber: { type: String },
  	city: { type: String },
  	province: { type: String },
  	gender: { type: String },
  	dateOfBirth: { type: String },
  	authentication: { 
		type: AuthenticationSchema, 
		required: true },
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
  	endDate: { 
		type: Date, 
		default: null }
});

export const UserModel = mongoose.model("User", UserSchema);
