import { Request, Response } from 'express'

export async function listPeriodsCtrl (_req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'getAll Periods' })
  }
}

export async function getPeriodCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'get PeriodById' })
  }
}

export async function createPeriodCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'create Period' })
  }
}

export async function updatePeriodCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'update Period' })
  }
}

export async function deletePeriodCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'delete Period' })
  }
}
