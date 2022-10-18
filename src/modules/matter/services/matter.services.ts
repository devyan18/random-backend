import { Types } from 'mongoose'
import Matter from '../interfaces/matter.entity'
import MatterModel from '../models/matter.model'

export async function listMatters () {
  const matters = await MatterModel.find({})

  return matters
}

export async function getMatter (matterId: string | Types.ObjectId) {
  const matter = await MatterModel.findById(matterId)

  if (!matter) return null

  return matter
}

export async function createMatter (matter: Matter) {
  const newMatter = await MatterModel.create(matter)

  return newMatter
}

export async function updateMatter (matter: Matter) {
  const updatedMatter = await MatterModel.updateOne(matter)

  return updatedMatter
}

export async function deleteMatter (matterId: string | Types.ObjectId) {
  const deletedMatter = await MatterModel.findByIdAndDelete(matterId)

  return deletedMatter
}
