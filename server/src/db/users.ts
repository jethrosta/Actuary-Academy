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
  	phone_number: string;
  	city: string;
  	province: string;
  	gender: string;
  	date_of_birth: string;
  	authentication: AuthenticationDocument;
  	academy_plan: string;
	is_subscribed: boolean;
  	end_date: Date;
};

// const tutorPackages = ['mahasiswa', 'umum', 'none'];
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
	authentication: { 
		type: AuthenticationSchema, 
	  	required: true 
  	},
  	is_subscribed: { 
		type: Boolean, 
	  	default: false 
	},
  	academy_plan: {
		type: String,
	  	required: true,
	  	enum: academyPackages,
	  	default: 'none',
  	},
	end_date: { 
		type: Date, 
	  	default: null,
  	},
  	phone_number: { type: String },
  	city: { type: String },
  	province: { type: String },
  	gender: { type: String },
  	date_of_birth: { type: String },
});

export const UserModel = mongoose.model("User", UserSchema);
