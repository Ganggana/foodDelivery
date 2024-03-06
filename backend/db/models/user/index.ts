import { model, models, Schema, Model } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  name: String;
  email: String;
  phone: String;
  isAdmin: String;
};
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: false, default: false },
});

export const UserModel: Model<UserModelType> =
  models["Users"] || model("User", UserSchema);
