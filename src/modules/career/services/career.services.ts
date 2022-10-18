import { Types } from 'mongoose'
import Career from '../interfaces/career.entity'
import CareerModel from '../models/career.model'

export async function listCareers () {
  const careers = await CareerModel.find({})

  return careers
}

export async function getCareer (careerId: string | Types.ObjectId) {
  const career = await CareerModel.findById(careerId)

  if (!career) return null

  return career
}

export async function createCareer (career: Career) {
  const newCareer = await CareerModel.create(career)

  return newCareer
}

export async function updateCareer (career: Career) {
  const updatedCareer = await CareerModel.updateOne(career)

  return updatedCareer
}

export async function deleteCareer (careerId: string | Types.ObjectId) {
  const deletedCareer = await CareerModel.findByIdAndDelete(careerId)

  return deletedCareer
}
