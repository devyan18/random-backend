import { Types } from 'mongoose'
import Permission from '../interfaces/permission.entity'
import PermissionModel, { IPermissionModel } from '../models/permission.model'

export async function listPermissions () {
  const permissions = await PermissionModel.find({})
  return permissions
}

export async function getPermission (
  permissionId: string | Types.ObjectId
): Promise<IPermissionModel | null> {
  const permission = await PermissionModel.findById(permissionId)
  if (!permission) return null
  return permission
}

export async function createPermission (permission: Permission) {
  const newPermission = new PermissionModel(permission)
  const permissionCreated = await newPermission.save()
  return permissionCreated
}

export async function updatePermission (permission: Permission) {
  const permissionUpdated = await PermissionModel.findOneAndUpdate({}, permission, { new: true })
  return permissionUpdated
}

export async function deletePermission (permissionId: string | Types.ObjectId) {
  await PermissionModel.findByIdAndDelete(permissionId)
  return true
}
