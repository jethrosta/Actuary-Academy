"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCourseModel = void 0;
// importing modules
const mongoose_1 = __importDefault(require("mongoose"));
;
const pdfSchema = new mongoose_1.default.Schema({
    pdfTitle: {
        type: String,
        required: true
    }
});
const videoSchema = new mongoose_1.default.Schema({
    videoTitle: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    }
});
;
const userCourseSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    subscribedBy: {
        userId: String,
    },
    submateri: {
        title: String,
        pdf: pdfSchema,
        video: videoSchema
    }
});
exports.userCourseModel = mongoose_1.default.model("userCourse", userCourseSchema);
//# sourceMappingURL=user.courses.js.map