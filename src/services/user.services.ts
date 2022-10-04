import { User } from "../entities/user.entity";
import UserModel, { IUserModel } from "../models/user.model";
import { createJsonWebToken } from "../utils/createJsonWebToken";

export async function createNewUserIntance (data: User): Promise<IUserModel> {
  try {
    const newUser = new UserModel(data);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating new user");
  }
};

export async function loginUserService (email: string, password: string): Promise<string | null> {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) return null;
    const token = createJsonWebToken(user);
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
}
