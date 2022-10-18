import { IUserModel } from '../../user/models/user.model'
import { Request, Response } from 'express'
import { getPersonById, updatePerson } from '../services/person.services'

export async function getPersonCtrl (req: Request, res: Response) {
  try {
    const user = req.user as IUserModel

    const person = await getPersonById(user._id)

    res.status(202).json({
      person
    })
  } catch (e) {
    res.status(400).send({ error: 'get PersonById' })
  }
}

export async function updatePersonCtrl (req: Request, res: Response) {
  try {
    const user = req.user as IUserModel

    const person = await updatePerson(req.body, user._id)

    res.status(202).json({
      person
    })
  } catch (e) {
    res.status(400).send({ error: 'update Person' })
  }
}
