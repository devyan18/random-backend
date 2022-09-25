import { User } from "../entities/user.entity";
import UserModel, { IUserModel } from "../models/user.model";

export async function createNewUserIntance (data: User): Promise<IUserModel> {
  try {
    const newUser = new UserModel(data);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Error creating new user");
  }
};
