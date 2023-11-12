"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTesti = exports.getAllTestimoni = exports.testimoni = void 0;
const testimonies_1 = require("../db/testimonies");
const users_1 = require("../db/users");
const testimonies_2 = require("../db/testimonies");
const testimoni = async (req, res) => {
    try {
        const user = await (0, users_1.getUserById)(req.userId);
        const cek = await (0, testimonies_2.getUserByName)(user.name);
        if (cek) {
            return res.status(400).json({ notification: "Testimoni already filled" });
        }
        const username = user.name;
        const { desTestimoni } = req.body;
        if (!desTestimoni) {
            return res.sendStatus(400);
        }
        try {
            const testi = await (0, testimonies_1.createTestimoni)({
                desTestimoni,
                username,
            });
            return res.status(200).json(testi).end();
        }
        catch (err) {
            res.json("Cannot create testimoni");
        }
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400).json("Cannot access testimoni function");
    }
};
exports.testimoni = testimoni;
const getAllTestimoni = async (req, res) => {
    try {
        const users = await (0, testimonies_1.getTestimoni)();
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400).json("Cannot access getAllTestimoni function");
    }
};
exports.getAllTestimoni = getAllTestimoni;
const deleteTesti = async (req, res) => {
    try {
        const user = await (0, users_1.getUserById)(req.userId);
        const { id } = user.id;
        const deletedTesti = await (0, testimonies_1.deleteTestiById)(id);
        return res.json(deletedTesti);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
};
exports.deleteTesti = deleteTesti;
//# sourceMappingURL=testimonies.js.map