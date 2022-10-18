import { permissionSchema } from '../modules/permission/validations/permissions.schema'
import { Router } from 'express'
import zodValidation from 'middlewares/zodValidation'
import passport from 'passport'
import {
  createPermissionCtrl,
  deletePermissionCtrl,
  listPermissionsCtrl,
  getPermissionCtrl,
  updatePermissionCtrl
} from '../modules/permission/controllers/permission.controllers'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), listPermissionsCtrl)

router.get('/:permission', passport.authenticate('jwt', { session: false }), getPermissionCtrl)

router.post('/', passport.authenticate('jwt', { session: false }), zodValidation(permissionSchema), createPermissionCtrl)

router.put('/:permission', passport.authenticate('jwt', { session: false }), zodValidation(permissionSchema), updatePermissionCtrl)

router.delete('/:permission', passport.authenticate('jwt', { session: false }), deletePermissionCtrl)

export { router }
