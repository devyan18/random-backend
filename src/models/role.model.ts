import { Document, model, Schema, Types } from "mongoose";
import { Role } from "../entities/role.entity";
import { IPermissionModel } from "./permission.model";

export interface IRoleModel extends Role, Document {
  permissions: Array<IPermissionModel | string | Types.ObjectId>;
}

const RoleSchema = new Schema<IRoleModel>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  permissions: [
    {
      type: Types.ObjectId,
      ref: "Permission"
    }
  ]
},
{
  timestamps: true
});

export default model<IRoleModel>("Role", RoleSchema);
