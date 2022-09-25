import { Person } from "../entities/person.entity";
import PersonMode, { IPersonModel } from "../models/person.model";

export async function createNewPersonInstace (data: Person): Promise<IPersonModel> {
  try {
    const newPerson = new PersonMode(data);
    await newPerson.save();
    return newPerson;
  } catch (error) {
    throw new Error("Error creating new person");
  }
}
