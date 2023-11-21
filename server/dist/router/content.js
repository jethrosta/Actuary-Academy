"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("../controllers/content");
const index_1 = require("../middlewares/index");
exports.default = (router) => {
    router.get("/v2/content/:id", index_1.isAuthenticated, content_1.getSpecificContent);
    router.post("/v2/auth/content/", index_1.isAuthenticated, content_1.content);
};
//# sourceMappingURL=content.js.map