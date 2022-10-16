import { Request, Response } from 'express'

export async function getAllPeriodsCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Periods'})
=======
    res.status(400).send({ error: 'getAll Periods' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getPeriodByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get PeriodById'})
=======
    res.status(400).send({ error: 'get PeriodById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createPeriodCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Period'})
=======
    res.status(400).send({ error: 'create Period' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updatePeriodCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Period'})
=======
    res.status(400).send({ error: 'update Period' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deletePeriodCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Period'})
=======
    res.status(400).send({ error: 'delete Period' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}