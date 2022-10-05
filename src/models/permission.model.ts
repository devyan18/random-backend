import { Document, model, Schema } from "mongoose";
import { Permission } from "../entities/permission.entity";

export interface IPermissionModel extends Permission, Document {}

const PermissionSchema = new Schema<IPermissionModel>({
  permissionName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

export default model<IPermissionModel>("Permission", PermissionSchema);
