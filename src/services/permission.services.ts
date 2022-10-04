import PermissionModel, { IPermissionModel } from "../models/permission.model";

export async function getAllPermissions (): Promise<IPermissionModel[]> {
  try {
    const permissions = await PermissionModel.find();
    return permissions;
  } catch (error) {
    console.log(error);
    throw new Error("Error in getAllPermissions");
  }
}

export async function getPermissionById (permissionId:string): Promise<IPermissionModel | null> {
  try {
    const permission = await PermissionModel.findById(permissionId);
    if (!permission) return null;
    return permission;
  } catch (error) {
    throw new Error("Error in getPermissionById");
  }
}
