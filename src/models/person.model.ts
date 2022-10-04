import { Document, model, Schema, Types } from "mongoose";

import { Person } from "../entities/person.entity";
import { IUserModel } from "./user.model";

export interface IPersonModel extends Person, Document {
  user: string | IUserModel,
  fullName: string
}

const PersonSchema = new Schema<IPersonModel>({
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

PersonSchema.pre<IPersonModel>("save", function (next) {
  const person = this;

  if (!person.isModified(["lastName", "firstName"])) return next();

  if (person.isModified("lastName") || person.isModified("firstName")) {
    person.fullName = `${person.firstName} ${person.lastName}`;
  }

  next();
});

export default model<IPersonModel>("Person", PersonSchema);
