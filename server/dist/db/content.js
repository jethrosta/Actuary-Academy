"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContent = exports.getContentById = exports.getContentBySessionToken = exports.contentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contentSchema = new mongoose_1.default.Schema({
    contentLink: { type: String, required: true },
});
exports.contentModel = mongoose_1.default.model("Content", contentSchema);
const getContentBySessionToken = (sessionToken) => exports.contentModel.findOne({
    "authentication.sessionToken.token": sessionToken,
});
exports.getContentBySessionToken = getContentBySessionToken;
const getContentById = (id) => exports.contentModel.findById(id);
exports.getContentById = getContentById;
const createContent = (values) => new exports.contentModel(values).save().then((user) => user.toObject());
exports.createContent = createContent;
//# sourceMappingURL=content.js.map