import { Router } from 'express'
import {
  createMatterCtrl,
  getAllMattersCtrl,
  deleteMatterCtrl,
  getMatterByIdCtrl,
  updateMatterCtrl
} from '../modules/matter/controllers/matter.controllers'
import passport from 'passport'
import zodValidation from '../middlewares/zodValidation'
import { matterSchema } from '../modules/matter/validations/matter.schemas'

const router = Router()

router.get('/:period', passport.authenticate('jwt', { session: false }), getAllMattersCtrl)

router.get('/:period/:matter', passport.authenticate('jwt', { session: false }), getMatterByIdCtrl)

router.post('/:period', passport.authenticate('jwt', { session: false }), zodValidation(matterSchema), createMatterCtrl)

router.put('/:period/:matter', passport.authenticate('jwt', { session: false }), zodValidation(matterSchema), updateMatterCtrl)

router.delete('/:period/:matter', passport.authenticate('jwt', { session: false }), deleteMatterCtrl)

export { router }
