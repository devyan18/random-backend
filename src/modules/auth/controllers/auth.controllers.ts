import { Request, Response } from 'express'
import {
  getTokenByLogin,
  createUserAndReturnToken
} from '../services/auth.services'

export async function loginUserCtrl (req: Request, res: Response) {
  try {
    const { email, password } = req.body

    const token = await getTokenByLogin(email, password)

    if (!token) {
      return res.status(404).json({
        message: 'user not found'
      })
    }

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

    const token = await createUserAndReturnToken(email, password, username)

    res.status(200).json({
      token
    })
  } catch (e) {
    res.status(400).send({ error: 'get AuthById' })
  }
}
