import { Document, model, Schema, Types } from 'mongoose'
import Matter from '../interfaces/matter.entity'
import { IUserModel } from '@mod/user/models/user.model'

export interface IMatterModel extends Matter, Document {
  teachers: Array<Types.ObjectId | IUserModel>
}

const MatterSchema = new Schema<IMatterModel>({
  matterName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teachers: [{
    type: Types.ObjectId,
    ref: 'User'
  }]
},
{
  timestamps: true
})

export default model<IMatterModel>('Matter', MatterSchema)
