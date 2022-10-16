import { Request, Response } from 'express'
import {
  getTokenByLogin,
  createUserAndReturnToken
} from '../services/auth.services'

export async function loginUserCtrl (req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const token = getTokenByLogin(email, password)

    res.status(200).json({
      token
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Auths' })
  }
}

export async function registerUserCtrl (req: Request, res: Response) {
  try {
    const { username, email, password } = req.body

    const token = createUserAndReturnToken(email, password, username)

    res.status(200).json({
      token
    })
  } catch (e) {
    res.status(400).send({ error: 'get AuthById' })
  }
}
