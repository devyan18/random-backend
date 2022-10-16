import { Request, Response } from 'express'

export async function getAllPersonsCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'getAll Persons' })
  }
}

export async function getPersonByIdCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'get PersonById' })
  }
}

export async function createPersonCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'create Person' })
  }
}

export async function updatePersonCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'update Person' })
  }
}

export async function deletePersonCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'delete Person' })
  }
}
