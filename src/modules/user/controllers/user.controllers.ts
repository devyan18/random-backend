import { Request, Response } from 'express'
import {
  createUser,
  deleteUser,
  getUser,
  listUsers,
  updateUser
} from '../services/user.services'

export async function listUsersCtrl (_req: Request, res: Response) {
  try {
    const users = await listUsers()
    res.status(200).json({
      users
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Users' })
  }
}

export async function getUserByIdCtrl (req: Request, res: Response) {
  try {
    const user = await getUser(req.params.id)
    if (!user) return res.sendStatus(404)
    res.status(200).json({
      user
    })
  } catch (e) {
    res.status(400).send({ error: 'get UserById' })
  }
}

export async function createUserCtrl (req: Request, res: Response) {
  try {
    const user = await createUser(req.body)
    res.status(200).json({
      user
    })
  } catch (e) {
    res.status(400).send({ error: 'create User' })
  }
}

export async function updateUserCtrl (req: Request, res: Response) {
  try {
    const updatedUser = await updateUser(req.body)
    res.status(200).json({
      updatedUser
    })
  } catch (e) {
    res.status(400).send({ error: 'update User' })
  }
}

export async function deleteUserCtrl (req: Request, res: Response) {
  try {
    const deletedUser = await deleteUser(req.params.id)
    res.status(200).json({
      deletedUser
    })
  } catch (e) {
    res.status(400).send({ error: 'delete User' })
  }
}
