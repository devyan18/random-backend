import { Document, model, Schema, Types } from "mongoose";
import Role from "../interfaces/role.entity";
import { PermissionModel } from "@modules/permission/models/permission.model";

export interface RoleModel extends Role, Document {
  permissions: Array<PermissionModel | string | Types.ObjectId>;
}

const RoleSchema = new Schema<RoleModel>({
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
    ref: "Permission"
  }]
},
{
  timestamps: true
});

export default model<RoleModel>("Role", RoleSchema);
