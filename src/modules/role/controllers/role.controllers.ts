import { Request, Response } from 'express'

export async function getAllRolesCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'getAll Roles'})
  }
}

export async function getRoleByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'get RoleById'})
  }
}

export async function createRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'create Role'})
  }
}

export async function updateRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'update Role'})
  }
}

export async function deleteRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'delete Role'})
  }
}