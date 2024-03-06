import { connect, set } from "mongoose";
const CONNECTION_STRING: string =
  "mongodb+srv://Gantulga:86238189Aa@cluster0.m8nlntb.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);
  try {
    await connect(CONNECTION_STRING), console.log("succesfully connected");
  } catch (error) {
    console.log("DB connection is unseccesfull");
  }
};
