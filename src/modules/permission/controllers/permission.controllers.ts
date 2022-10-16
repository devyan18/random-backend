import { Request, Response } from 'express'

export async function getAllPermissionsCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'getAll Permissions'})
=======
    res.status(400).send({ error: 'getAll Permissions' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function getPermissionByIdCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'get PermissionById'})
=======
    res.status(400).send({ error: 'get PermissionById' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function createPermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'create Permission'})
=======
    res.status(400).send({ error: 'create Permission' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function updatePermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'update Permission'})
=======
    res.status(400).send({ error: 'update Permission' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}

export async function deletePermissionCtrl(req: Request, res: Response) {
  try {
    res.send('success')
  } catch (e) {
<<<<<<< HEAD
    res.status(400).send({error: 'delete Permission'})
=======
    res.status(400).send({ error: 'delete Permission' })
>>>>>>> 895dce0 (add fix eslint erros script in package.json)
  }
}