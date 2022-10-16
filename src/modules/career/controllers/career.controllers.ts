import { Request, Response } from 'express'

export async function getAllCareersCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'getAll Careers' })
  }
}

export async function getCareerByIdCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'get CareerById' })
  }
}

export async function createCareerCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'create Career' })
  }
}

export async function updateCareerCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'update Career' })
  }
}

export async function deleteCareerCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'delete Career' })
  }
}
