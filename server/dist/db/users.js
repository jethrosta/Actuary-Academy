"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.updateUserbyId = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SessionTokenSchema = new mongoose_1.default.Schema({
    token: { type: String, required: false },
    expiresAt: { type: Date, required: false },
});
const AuthenticationSchema = new mongoose_1.default.Schema({
    password: { type: String, required: true },
    salt: { type: String, required: true },
    sessionToken: { type: SessionTokenSchema },
});
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    authentication: { type: AuthenticationSchema, required: true },
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const getUserBySessionToken = (sessionToken) => exports.UserModel.findOne({
    "authentication.sessionToken.token": sessionToken,
});
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => exports.UserModel.findById(id);
exports.getUserById = getUserById;
const createUser = (values) => new exports.UserModel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
const deleteUserById = (id) => exports.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserbyId = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUserbyId = updateUserbyId;
const getUserByName = (name) => exports.UserModel.findOne({ name });
exports.getUserByName = getUserByName;
//# sourceMappingURL=users.js.map