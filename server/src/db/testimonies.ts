import mongoose from "mongoose";

const testimoniSchema = new mongoose.Schema({
  username: { type: String, required: true },
  desTestimoni: { type: String, required: true },
  //   email: { type: String, required: true },
  // authentication: {
  //   password: { type: String, required: true, select: false },
  //   salt: { type: String, select: false },
  //   sessionToken: {
  //     token: { type: String, required: false },
  //     expiresAt: { type: Date, required: false },
  //   },
  // },
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
// export const updateUserbyId = (id: string, values: Record<string, any>) =>testiModel.findByIdAndUpdate(
//   id, values
// );
