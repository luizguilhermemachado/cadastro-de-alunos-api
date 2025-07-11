import { Router} from "express";
import alunoController from "../controllers/alunoController.js";
import loginRequired from "../middlewares/loginRequired.js"

const router = new Router()

router.get('/', alunoController.index)
router.post('/', loginRequired, alunoController.store)
router.put('/:id', loginRequired, alunoController.update)
router.get('/:id', alunoController.show)
router.delete('/:id', loginRequired, alunoController.delete)

export default router
