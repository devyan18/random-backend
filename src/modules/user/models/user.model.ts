import { Document, model, Schema, Types } from "mongoose";
import bcryptjs from "bcryptjs";
import User from "../interfaces/user.entity";
import { PersonModel } from "@modules/person/models/person.model";
import { RoleModel } from "@modules/role/models/role.model";

const SALT_WORK_FACTOR = 10;

export interface UserModel extends User, Document {
  comparePassword: (password: string) => Promise<boolean>
  person: string | Types.ObjectId | PersonModel
  role: string | Types.ObjectId | RoleModel
  password: string
  isActive: boolean
}

const UserSchema = new Schema<UserModel>({
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
  person: {
    type: Schema.Types.ObjectId,
    ref: "Person",
    default: null
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    default: null
  }
},
{
  timestamps: true
});

UserSchema.pre<UserModel>("save", async function (next) {
  const user = this;

  if (!user.isModified(["password"])) return next();

  if (user.isModified("password")) {
    const salt = await bcryptjs.genSalt(SALT_WORK_FACTOR);
    const hash = await bcryptjs.hash(user.password, salt);
    user.password = hash;
  }

  next();
});

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcryptjs.compare(password, this.password);
};

export default model<UserModel>("User", UserSchema);
