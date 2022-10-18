import { Request, Response } from 'express'
import {
  createRole,
  deleteRole,
  getRole,
  listRoles,
  updateRole
} from '../services/role.services'

export async function getAllRolesCtrl (req: Request, res: Response) {
  try {
    const roles = await listRoles()
    res.status(200).json({
      roles
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Roles' })
  }
}

export async function getRoleByIdCtrl (req: Request, res: Response) {
  try {
    const role = await getRole(req.params.id)
    if (!role) return res.sendStatus(404)
    res.status(200).json({
      role
    })
  } catch (e) {
    res.status(400).send({ error: 'get RoleById' })
  }
}

export async function createRoleCtrl (req: Request, res: Response) {
  try {
    const role = await createRole(req.body)
    res.status(201).json({
      role
    })
  } catch (e) {
    res.status(400).send({ error: 'create Role' })
  }
}

export async function updateRoleCtrl (req: Request, res: Response) {
  try {
    const role = await updateRole(req.body)
    res.status(200).json({
      role
    })
  } catch (e) {
    res.status(400).send({ error: 'update Role' })
  }
}

export async function deleteRoleCtrl (req: Request, res: Response) {
  try {
    await deleteRole(req.params.id)
    res.sendStatus(204)
  } catch (e) {
    res.status(400).send({ error: 'delete Role' })
  }
}
