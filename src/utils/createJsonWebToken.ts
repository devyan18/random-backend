import environments from '../settings/env.variables'
import { IUserModel } from '../modules/user/models/user.model'
import jwt from 'jsonwebtoken'

export function createJsonWebToken (user: IUserModel): string {
  const token = jwt.sign({ userId: user.id }, environments.JWT_SECRET)
  return token
}
