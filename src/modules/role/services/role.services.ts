import { Types } from 'mongoose'
import Role from '../interfaces/role.entity'
import RoleModel from '../models/role.model'

export async function listRoles () {
  const roles = await RoleModel.find({}).populate('permissions')

  return roles
}

export async function getRole (roleId: string | Types.ObjectId) {
  const role = await RoleModel.findById(roleId).populate('permissions')

  if (!role) return null

  return role
}

export async function createRole (role: Role) {
  const newRole = await RoleModel.create(role)

  return newRole
}

export async function updateRole (role: Role) {
  const updatedRole = await RoleModel.updateOne(role)

  return updatedRole
}

export async function deleteRole (roleId: string | Types.ObjectId) {
  const deletedRole = await RoleModel.findByIdAndDelete(roleId)

  return deletedRole
}
