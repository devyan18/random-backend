import { Document, model, Schema, Types } from 'mongoose'
import bcryptjs from 'bcryptjs'
import User from '../interfaces/user.entity'
import { IPersonModel } from '../../person/models/person.model'
import { IRoleModel } from '../../role/models/role.model'

const SALT_WORK_FACTOR = 10

export interface IUserModel extends User, Document {
  _id: Types.ObjectId;
  comparePassword: (password: string) => Promise<boolean>
  person: string | Types.ObjectId | IPersonModel | null
  role: string | Types.ObjectId | IRoleModel | null
  password: string
  isActive: boolean
  isAdmin: boolean
}

const UserSchema = new Schema<IUserModel>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  person: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
    default: null
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    default: null
  }
},
{
  timestamps: true
})

UserSchema.pre<IUserModel>('save', async function (next) {
  const user = this

  if (!user.isModified(['password'])) return next()

  if (user.isModified('password')) {
    const salt = await bcryptjs.genSalt(SALT_WORK_FACTOR)
    const hash = await bcryptjs.hash(user.password, salt)
    user.password = hash
  }

  next()
})

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcryptjs.compare(password, this.password)
}

export default model<IUserModel>('User', UserSchema)
