import { Document, model, Schema } from 'mongoose'
import Permission from '../interfaces/permission.entity'

export interface IPermissionModel extends Permission, Document {}

const PermissionSchema = new Schema<IPermissionModel>({
  permissionName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
},
{
  timestamps: true
})

export default model<IPermissionModel>('Permission', PermissionSchema)
