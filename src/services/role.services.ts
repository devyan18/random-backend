import { Types } from "mongoose";
import RoleModel, { IRoleModel } from "../models/role.model";

export async function getAllRoles (): Promise<IRoleModel[]> {
  try {
    const roles = await RoleModel.find();
    return roles;
  } catch (error) {
    console.log(error);
    throw new Error("Error in getAllRoles");
  }
}

export async function getRoleById (
  roleId:string | Types.ObjectId
): Promise<IRoleModel | null> {
  try {
    const role = await RoleModel.findById(roleId);
    if (!role) return null;
    return role;
  } catch (error) {
    throw new Error("Error in getRoleById");
  }
}

export async function createRole (
  name: string,
  description: string,
  permissions: Array<Types.ObjectId | string>
): Promise<IRoleModel | null> {
  try {
    const newRole = new RoleModel({
      name,
      description,
      permissions
    });
    await newRole.save();
    return newRole;
  } catch (error) {
    throw new Error("Error in createRole");
  }
}

export async function editRole (
  roleId: string | Types.ObjectId,
  roleName: string,
  description: string,
  permissions: Array<Types.ObjectId | string>
): Promise<IRoleModel | null> {
  try {
    const role = await RoleModel.findById(roleId);
    if (!role) return null;
    role.roleName = roleName;
    role.description = description;
    role.permissions = permissions;
    await role.save();
    return role;
  } catch (error) {
    throw new Error("Error in editRole");
  }
}

export async function deleteRole (
  roleId: string | Types.ObjectId
): Promise<boolean> {
  try {
    const role = await RoleModel.findById(roleId);
    if (!role) return false;
    await role.delete();
    return true;
  } catch (error) {
    throw new Error("Error in deleteRole");
  }
}
