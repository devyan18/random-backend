import { Request, Response } from 'express'

export async function getAllMattersCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Matters'})
=======
    res.status(400).send({ error: 'getAll Matters' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getMatterByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get MatterById'})
=======
    res.status(400).send({ error: 'get MatterById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createMatterCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Matter'})
=======
    res.status(400).send({ error: 'create Matter' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updateMatterCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Matter'})
=======
    res.status(400).send({ error: 'update Matter' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deleteMatterCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Matter'})
=======
    res.status(400).send({ error: 'delete Matter' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}