import { Request, Response } from 'express'

export async function getAllPersonsCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Persons'})
=======
    res.status(400).send({ error: 'getAll Persons' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getPersonByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get PersonById'})
=======
    res.status(400).send({ error: 'get PersonById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createPersonCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Person'})
=======
    res.status(400).send({ error: 'create Person' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updatePersonCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Person'})
=======
    res.status(400).send({ error: 'update Person' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deletePersonCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Person'})
=======
    res.status(400).send({ error: 'delete Person' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}