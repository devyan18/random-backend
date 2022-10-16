import { Router } from 'express'
import {
  createMatterCtrl,
  getAllMattersCtrl,
  deleteMatterCtrl,
  getMatterByIdCtrl,
  updateMatterCtrl
} from '../modules/matter/controllers/matter.controllers'

const router = Router()

router.get('/:period', getAllMattersCtrl)

router.get('/:period/:matter', getMatterByIdCtrl)

router.post('/:period', createMatterCtrl)

router.put('/:period/:matter', updateMatterCtrl)

router.delete('/:period/:matter', deleteMatterCtrl)

export { router }
