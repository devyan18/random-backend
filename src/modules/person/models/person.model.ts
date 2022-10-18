import { Document, model, Schema, Types } from 'mongoose'
import Person from '../interfaces/person.entity'
import { IUserModel } from '../../user/models/user.model'

export interface IPersonModel extends Person, Document {
  user: string | IUserModel,
  fullName: string
}

const PersonSchema = new Schema<IPersonModel>({
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  fullName: {
    type: String,
    default: null
  },
  dateOfBirth: {
    type: Date,
    default: null
  },
  gender: {
    type: String,
    default: 'unknown'
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true
})

PersonSchema.pre<IPersonModel>('save', function (next) {
  const person = this

  if (!person.isModified(['lastName', 'firstName'])) return next()

  if (person.isModified('lastName') || person.isModified('firstName')) {
    if (person.lastName && person.firstName) {
      person.fullName = `${person.firstName} ${person.lastName}`
    }
  }

  next()
})

export default model<IPersonModel>('Person', PersonSchema)
