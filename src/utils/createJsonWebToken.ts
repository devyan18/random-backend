import jwt from "jsonwebtoken";
import environments from "../settings/env.variables";
import { IUserModel } from "../models/user.model";

export function createJsonWebToken (user: IUserModel): string {
  const token = jwt.sign({ userId: user.id }, environments.JWT_SECRET);
  return token;
}
