import { Request, Response } from 'express'

export async function getAllPermissionsCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'getAll Permissions'})
  }
}

export async function getPermissionByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'get PermissionById'})
  }
}

export async function createPermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'create Permission'})
  }
}

export async function updatePermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'update Permission'})
  }
}

export async function deletePermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'delete Permission'})
  }
}