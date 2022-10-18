import { Request, Response } from 'express'
import {
  createMatter,
  deleteMatter,
  getMatter,
  listMatters,
  updateMatter
} from '../services/matter.services'

export async function getAllMattersCtrl (_req: Request, res: Response) {
  try {
    const matters = await listMatters()
    res.status(200).json({
      matters
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Matters' })
  }
}

export async function getMatterByIdCtrl (req: Request, res: Response) {
  try {
    const matter = await getMatter(req.params.id)
    if (!matter) return res.sendStatus(404)
    res.status(200).json({
      matter
    })
  } catch (e) {
    res.status(400).send({ error: 'get MatterById' })
  }
}

export async function createMatterCtrl (req: Request, res: Response) {
  try {
    const matter = await createMatter(req.body)
    res.status(200).json({
      matter
    })
  } catch (e) {
    res.status(400).send({ error: 'create Matter' })
  }
}

export async function updateMatterCtrl (req: Request, res: Response) {
  try {
    const updatedMatter = await updateMatter(req.body)
    res.status(200).json({
      updatedMatter
    })
  } catch (e) {
    res.status(400).send({ error: 'update Matter' })
  }
}

export async function deleteMatterCtrl (req: Request, res: Response) {
  try {
    const deletedMatter = await deleteMatter(req.params.id)
    res.status(200).json({
      deletedMatter
    })
  } catch (e) {
    res.status(400).send({ error: 'delete Matter' })
  }
}
