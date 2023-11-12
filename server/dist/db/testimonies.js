"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.deleteTestiById = exports.createTestimoni = exports.getTestiById = exports.getTestiBySessionToken = exports.getTestimoni = exports.testiModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const testimoniSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    desTestimoni: { type: String, required: true },
});
exports.testiModel = mongoose_1.default.model("Testimonies", testimoniSchema);
const getTestimoni = () => exports.testiModel.find();
exports.getTestimoni = getTestimoni;
const getTestiBySessionToken = (sessionToken) => exports.testiModel.findOne({
    "authentication.sessionToken.token": sessionToken,
});
exports.getTestiBySessionToken = getTestiBySessionToken;
const getTestiById = (id) => exports.testiModel.findById(id);
exports.getTestiById = getTestiById;
const createTestimoni = (values) => new exports.testiModel(values).save().then((user) => user.toObject());
exports.createTestimoni = createTestimoni;
const deleteTestiById = (id) => exports.testiModel.findOneAndDelete({ _id: id });
exports.deleteTestiById = deleteTestiById;
const getUserByName = (username) => exports.testiModel.findOne({ username });
exports.getUserByName = getUserByName;
//# sourceMappingURL=testimonies.js.map