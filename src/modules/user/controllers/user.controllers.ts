import { Request, Response } from 'express'

export async function getAllUsersCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'getAll Users'})
  }
}

export async function getUserByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'get UserById'})
  }
}

export async function createUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'create User'})
  }
}

export async function updateUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'update User'})
  }
}

export async function deleteUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({error: 'delete User'})
  }
}