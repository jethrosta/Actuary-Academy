import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  contentLink: { type: String, required: true },
});

export const contentModel = mongoose.model("Content", contentSchema);
export const getContentBySessionToken = (sessionToken: string) =>
  contentModel.findOne({
    "authentication.sessionToken.token": sessionToken,
  });
export const getContentById = (id: string) => contentModel.findById(id);
export const createContent = (values: Record<string, any>) =>
  new contentModel(values).save().then((user) => user.toObject());
