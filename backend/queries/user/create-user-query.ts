import { Request } from "express";
import { passwordHash } from "../../utils";
import { UserModel } from "../../db/models/user";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    const hash = passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: hash,
    });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
