import { Document, model, Schema } from "mongoose";
import Permission from "../interfaces/permission.entity";

export interface PermissionModel extends Permission, Document {}

const PermissionSchema = new Schema<PermissionModel>({
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

export default model<PermissionModel>("Permission", PermissionSchema);
