"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testimonies_1 = require("../controllers/testimonies");
const testimonies_2 = require("../controllers/testimonies");
const index_1 = require("../middlewares/index");
exports.default = (router) => {
    router.get("/v2/testimoni", testimonies_2.getAllTestimoni);
    router.post("/v2/testimoni", index_1.isAuthenticated, testimonies_1.testimoni);
    router.delete("/v2/testimoni", index_1.isAuthenticated, index_1.isOwner, testimonies_2.deleteTesti);
};
//# sourceMappingURL=testimonies.js.map