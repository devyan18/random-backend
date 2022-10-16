import { Request, Response } from 'express'

export async function getAllRolesCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Roles'})
=======
    res.status(400).send({ error: 'getAll Roles' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getRoleByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get RoleById'})
=======
    res.status(400).send({ error: 'get RoleById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Role'})
=======
    res.status(400).send({ error: 'create Role' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updateRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Role'})
=======
    res.status(400).send({ error: 'update Role' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deleteRoleCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Role'})
=======
    res.status(400).send({ error: 'delete Role' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}