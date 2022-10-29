import { Router } from 'express'
import {
  createSubjectCtrl,
  deleteSubjectCtrl,
  getSubjectByIdCtrl,
  getAllSubjectsCtrl,
  updateSubjectCtrl
} from '../modules/subject/controllers/subject.controllers'
import passport from 'passport'
import zodValidation from '../middlewares/zodValidation'
import { subjectSchema } from '../modules/subject/validations/subject.schemas'

const router = Router()

router.get('/:period', passport.authenticate('jwt', { session: false }), getAllSubjectsCtrl)

router.get('/:period/:subject', passport.authenticate('jwt', { session: false }), getSubjectByIdCtrl)

router.post('/:period', passport.authenticate('jwt', { session: false }), zodValidation(subjectSchema), createSubjectCtrl)

router.put('/:period/:subject', passport.authenticate('jwt', { session: false }), zodValidation(subjectSchema), updateSubjectCtrl)

router.delete('/:period/:subject', passport.authenticate('jwt', { session: false }), deleteSubjectCtrl)

export { router }
