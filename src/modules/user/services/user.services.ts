import { Types } from 'mongoose'
import User from '../interfaces/user.entity'
import UserModel from '../models/user.model'

export async function listUsers () {
  const users = await UserModel.find({}).populate('person')

  return users
}

export async function getUser (userId: string | Types.ObjectId) {
  const user = await UserModel.findById(userId).populate('person')

  if (!user) return null

  return user
}

export async function createUser (user: User) {
  const newUser = await UserModel.create(user)

  return newUser
}

export async function updateUser (user: User) {
  const { email, username, password } = user

  const updatedUser = await UserModel.updateOne({ email, username, password }, { new: true })

  return updatedUser
}

export async function deleteUser (userId: string | Types.ObjectId) {
  const deletedUser = await UserModel.findByIdAndDelete(userId, { new: true })

  return deletedUser
}
