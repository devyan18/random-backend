import { Types } from "mongoose";
import { Person } from "../entities/person.entity";
import PersonModel, { IPersonModel } from "../models/person.model";

export async function createNewPerson (
  userId:string | Types.ObjectId,
  data: Person
): Promise<IPersonModel> {
  try {
    const newPerson = new PersonModel({
      ...data,
      user: userId
    });
    await newPerson.save();
    return newPerson;
  } catch (error) {
    throw new Error("Error creating new person");
  }
}

export async function getPerson (
  idUser: string | Types.ObjectId
): Promise<IPersonModel | null> {
  try {
    const person = await PersonModel.findOne({ user: idUser });
    if (!person) return null;
    return person;
  } catch (error) {
    throw new Error("Error getting person");
  }
}

export async function updatePerson (
  idUser: string | Types.ObjectId,
  data: Person
): Promise<IPersonModel | null> {
  try {
    const person = await PersonModel.findOneAndUpdate({ user: idUser }, data, { new: true });
    if (!person) return null;
    return person;
  } catch (error) {
    throw new Error("Error updating person");
  }
}
