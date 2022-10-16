import { Request, Response } from 'express'

export async function getAllMattersCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'getAll Matters' })
  }
}

export async function getMatterByIdCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'get MatterById' })
  }
}

export async function createMatterCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'create Matter' })
  }
}

export async function updateMatterCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'update Matter' })
  }
}

export async function deleteMatterCtrl (req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
    res.status(400).send({ error: 'delete Matter' })
  }
}
