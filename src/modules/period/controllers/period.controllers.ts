import { Request, Response } from 'express'
import {
  createPeriod,
  deletePeriod,
  getAllPeriod,
  getPeriodById,
  updatePeriod
} from '../services/period.services'

export async function listPeriodsCtrl (_req: Request, res: Response) {
  try {
    const periods = await getAllPeriod()
    res.status(200).json({
      periods
    })
  } catch (e) {
    res.status(400).send({ error: 'getAll Periods' })
  }
}

export async function getPeriodCtrl (req: Request, res: Response) {
  try {
    const period = await getPeriodById(req.params.id)
    if (!period) return res.sendStatus(404)
    res.status(200).json({
      period
    })
  } catch (e) {
    res.status(400).send({ error: 'get PeriodById' })
  }
}

export async function createPeriodCtrl (req: Request, res: Response) {
  try {
    const carrerId = req.params.career
    const period = await createPeriod(carrerId, req.body)
    res.status(200).json({
      period
    })
  } catch (e) {
    res.status(400).send({ error: 'create Period' })
  }
}

export async function updatePeriodCtrl (req: Request, res: Response) {
  try {
    const periodId = req.params.period
    const updatedPeriod = await updatePeriod(periodId, req.body)
    res.status(200).json({
      updatedPeriod
    })
  } catch (e) {
    res.status(400).send({ error: 'update Period' })
  }
}

export async function deletePeriodCtrl (req: Request, res: Response) {
  try {
    const periodId = req.params.period
    const deletedPeriod = await deletePeriod(periodId)
    res.status(200).json({
      deletedPeriod
    })
  } catch (e) {
    res.status(400).send({ error: 'delete Period' })
  }
}
