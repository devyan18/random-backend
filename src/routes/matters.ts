import { Router } from 'express'
import {
  createMatterCtrl,
  getAllMattersCtrl,
  deleteMatterCtrl,
  getMatterByIdCtrl,
  updateMatterCtrl
<<<<<<< HEAD
} from "@modules/matter/controllers/matter.controllers";
import passport from "passport";
=======
} from '@modules/matter/controllers/matter.controllers'
>>>>>>> 895dce0 (add fix eslint erros script in package.json)

const router = Router()

<<<<<<< HEAD
router.get("/:period", passport.authenticate("jwt", { session: false }), getAllMattersCtrl);

router.get("/:period/:matter", passport.authenticate("jwt", { session: false }), getMatterByIdCtrl);

router.post("/:period", passport.authenticate("jwt", { session: false }), createMatterCtrl);

router.put("/:period/:matter", passport.authenticate("jwt", { session: false }), updateMatterCtrl);

router.delete("/:period/:matter", passport.authenticate("jwt", { session: false }), deleteMatterCtrl);
=======
router.get('/:period', getAllMattersCtrl)

router.get('/:period/:matter', getMatterByIdCtrl)

router.post('/:period', createMatterCtrl)

router.put('/:period/:matter', updateMatterCtrl)

router.delete('/:period/:matter', deleteMatterCtrl)
>>>>>>> 895dce0 (add fix eslint erros script in package.json)

export { router }
