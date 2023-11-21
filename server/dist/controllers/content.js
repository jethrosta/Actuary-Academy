"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificContent = exports.content = void 0;
const content_1 = require("../db/content");
const content = async (req, res) => {
    try {
        const { contentLink } = req.body;
        if (!contentLink) {
            return res.sendStatus(400);
        }
        try {
            const user = await (0, content_1.createContent)({
                contentLink,
            });
            return res.status(200).json(user).end();
        }
        catch (err) {
            res.json("Cannot create Content");
        }
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400).json("Cannot access testimoni function");
    }
};
exports.content = content;
const getSpecificContent = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await (0, content_1.getContentById)(id);
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        return res
            .sendStatus(400)
            .json("Cannot access getSpecificContent function");
    }
};
exports.getSpecificContent = getSpecificContent;
//# sourceMappingURL=content.js.map