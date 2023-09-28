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

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken.token": sessionToken,
  });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserbyId = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);

export const getUserByName = (name: string) => UserModel.findOne({ name });
