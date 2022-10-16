import { Request, Response } from 'express'

export async function getAllCareersCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Careers'})
=======
    res.status(400).send({ error: 'getAll Careers' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getCareerByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get CareerById'})
=======
    res.status(400).send({ error: 'get CareerById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createCareerCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Career'})
=======
    res.status(400).send({ error: 'create Career' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updateCareerCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Career'})
=======
    res.status(400).send({ error: 'update Career' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deleteCareerCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Career'})
=======
    res.status(400).send({ error: 'delete Career' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}