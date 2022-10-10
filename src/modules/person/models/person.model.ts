import { Document, model, Schema, Types } from "mongoose";
import Person from "../interfaces/person.entity";
import { UserModel } from "@modules/user/models/user.model";

export interface PersonModel extends Person, Document {
  user: string | UserModel,
  fullName: string
}

const PersonSchema = new Schema<PersonModel>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  }
},
{
  timestamps: true
});

PersonSchema.pre<PersonModel>("save", function (next) {
  const person = this;

  if (!person.isModified(["lastName", "firstName"])) return next();

  if (person.isModified("lastName") || person.isModified("firstName")) {
    person.fullName = `${person.firstName} ${person.lastName}`;
  }

  next();
});

export default model<PersonModel>("Person", PersonSchema);
