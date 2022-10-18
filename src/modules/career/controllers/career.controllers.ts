import { Request, Response } from 'express'
import {
  listCareers,
  createCareer,
  deleteCareer,
  getCareer,
  updateCareer
} from '../services/career.services'

export async function listCareersCtrl (_req: Request, res: Response) {
  try {
    const careers = await listCareers()
    res.status(200).json({
      careers
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Careers' })
  }
}

export async function getCareerByIdCtrl (req: Request, res: Response) {
  try {
    const career = await getCareer(req.params.id)
    if (!career) return res.sendStatus(404)
    res.status(200).json({
      career
    })
  } catch (e) {
    res.status(400).send({ error: 'get CareerById' })
  }
}

export async function createCareerCtrl (req: Request, res: Response) {
  try {
    const career = await createCareer(req.body)
    res.status(200).json({
      career
    })
  } catch (e) {
    res.status(400).send({ error: 'create Career' })
  }
}

export async function updateCareerCtrl (req: Request, res: Response) {
  try {
    const updatedCareer = await updateCareer(req.body)
    res.status(200).json({
      updatedCareer
    })
  } catch (e) {
    res.status(400).send({ error: 'update Career' })
  }
}

export async function deleteCareerCtrl (req: Request, res: Response) {
  try {
    const deletedCareer = await deleteCareer(req.params.id)
    res.status(200).json({
      deletedCareer
    })
  } catch (e) {
    res.status(400).send({ error: 'delete Career' })
  }
}
