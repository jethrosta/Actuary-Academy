import mongoose from "mongoose";

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

interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  authentication: AuthenticationDocument;
}

const UserSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  authentication: { type: AuthenticationSchema, required: true },
});

export const UserModel = mongoose.model("User", UserSchema);
