import { Router } from 'express'
import passport from 'passport'
import {
  createPermissionCtrl,
  deletePermissionCtrl,
  getAllPermissionsCtrl,
  getPermissionByIdCtrl,
  updatePermissionCtrl
} from '../modules/permission/controllers/permission.controllers'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), getAllPermissionsCtrl)

router.get('/:permission', passport.authenticate('jwt', { session: false }), getPermissionByIdCtrl)

router.post('/', passport.authenticate('jwt', { session: false }), createPermissionCtrl)

router.put('/:permission', passport.authenticate('jwt', { session: false }), updatePermissionCtrl)

router.delete('/:permission', passport.authenticate('jwt', { session: false }), deletePermissionCtrl)

export { router }
