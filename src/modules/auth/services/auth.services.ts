import UserModel, { IUserModel } from '../../user/models/user.model'
import { createJsonWebToken } from '../../../utils/createJsonWebToken'
import PersonModel from '../../person/models/person.model'

export async function getTokenByLogin (email: string, password: string) {
  try {
    const user = await UserModel.findOne({ email }) as IUserModel

    if (!user) return null

    const isMatch = await user.comparePassword(password)

    if (!isMatch) return null

    const token = createJsonWebToken(user)

    return token
  } catch (error) {
    throw new Error('Error to login user')
  }
}

export async function createUserAndReturnToken (email: string, password: string, username: string) {
  try {
    const newUser = new UserModel({
      email,
      password,
      username
    })

    if (!newUser) {
      return null
    }

    const person = new PersonModel({
      user: newUser._id
    })

    await newUser.save()
    await person.save()

    const token = createJsonWebToken(newUser)

    return token
  } catch (error) {
    throw new Error('Error to register user')
  }
}
