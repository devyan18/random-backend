import { Types } from 'mongoose'
import Person from '../interfaces/person.entity'
import PersonModel, { IPersonModel } from '../models/person.model'

export async function getPersonById (
  userId: string | Types.ObjectId
): Promise<IPersonModel | null> {
  const person = await PersonModel.findOne({ user: userId })
  if (!person) return null
  return person
}

export async function updatePerson (
  person: Partial<Person>,
  userId: Types.ObjectId
): Promise<IPersonModel | null> {
  const personToUpdate = await PersonModel.findOne({ user: userId })

  if (!personToUpdate) {
    return null
  }

  const personEdited = await PersonModel.findOneAndUpdate({ user: userId }, person, { new: true })

  return personEdited
}
