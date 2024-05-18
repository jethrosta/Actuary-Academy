import mongoose from "mongoose";

const testimoniSchema = new mongoose.Schema({
  username: { type: String, required: true },
  desTestimoni: { type: String, required: true },
});

export const testiModel = mongoose.model("Testimonies", testimoniSchema);
export const getTestimoni = () => testiModel.find();
export const getTestiBySessionToken = (sessionToken: string) =>
  testiModel.findOne({
    "authentication.sessionToken.token": sessionToken,
  });
export const getTestiById = (id: string) => testiModel.findById(id);
export const createTestimoni = (values: Record<string, any>) =>
  new testiModel(values).save().then((user) => user.toObject());
export const deleteTestiById = (id: string) =>
  testiModel.findOneAndDelete({ _id: id });
export const getUserByName = (username: string) =>
  testiModel.findOne({ username });
