import { Request, Response } from 'express'
import {
  createPermission,
  getPermission,
  listPermissions,
  updatePermission,
  deletePermission
} from '../services/permission.services'

async function listPermissionsCtrl (req: Request, res: Response) {
  try {
    const permissions = await listPermissions()
    res.status(200).json({
      permissions
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Permissions' })
  }
}

async function getPermissionCtrl (req: Request, res: Response) {
  try {
    const permission = await getPermission(req.params.id)
    if (!permission) return res.sendStatus(404)
    res.status(200).json({
      permission
    })
  } catch (e) {
    res.status(400).send({ error: 'get PermissionById' })
  }
}

async function createPermissionCtrl (req: Request, res: Response) {
  try {
    const permission = await createPermission(req.body)
    res.status(201).json({
      permission
    })
  } catch (e) {
    res.status(400).send({ error: 'create Permission' })
  }
}

async function updatePermissionCtrl (req: Request, res: Response) {
  try {
    const permission = await updatePermission(req.body)
    res.status(200).json({
      permission
    })
  } catch (e) {
    res.status(400).send({ error: 'update Permission' })
  }
}

async function deletePermissionCtrl (req: Request, res: Response) {
  try {
    await deletePermission(req.params.id)
    res.sendStatus(204)
  } catch (e) {
    res.status(400).send({ error: 'delete Permission' })
  }
}

export {
  listPermissionsCtrl,
  getPermissionCtrl,
  createPermissionCtrl,
  updatePermissionCtrl,
  deletePermissionCtrl
}
