import { Document, model, Schema } from "mongoose";

import { Person } from "../entities/person.entity";

export interface IPersonModel extends Person, Document {}

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
  }
},
{
  timestamps: true,
  versionKey: false
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
