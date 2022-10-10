import { Document, model, Schema, Types } from "mongoose";
import Matter from "../interfaces/matter.entity";
import { UserModel } from "@modules/user/models/user.model";

export interface MatterModel extends Matter, Document {
  teachers: Array<Types.ObjectId | UserModel>
}

const MatterSchema = new Schema<MatterModel>({
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
    ref: "User"
  }]
},
{
  timestamps: true
});

export default model<MatterModel>("Matter", MatterSchema);
