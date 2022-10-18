import { Document, model, Schema, Types } from 'mongoose'
import Role from '../interfaces/role.entity'
import { IPermissionModel } from '@mod/permission/models/permission.model'

export interface IRoleModel extends Role, Document {
  permissions: Array<IPermissionModel | string | Types.ObjectId>;
}

const RoleSchema = new Schema<IRoleModel>({
  roleName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  permissions: [{
    type: Types.ObjectId,
    ref: 'Permission'
  }]
},
{
  timestamps: true
})

export default model<IRoleModel>('Role', RoleSchema)
