import { Request, Response } from 'express'

export async function getAllUsersCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Users'})
=======
    res.status(400).send({ error: 'getAll Users' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getUserByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get UserById'})
=======
    res.status(400).send({ error: 'get UserById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create User'})
=======
    res.status(400).send({ error: 'create User' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updateUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update User'})
=======
    res.status(400).send({ error: 'update User' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deleteUserCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete User'})
=======
    res.status(400).send({ error: 'delete User' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}