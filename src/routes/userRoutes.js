import { Router} from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";
const router = new Router()
//Não deveria existir
//router.get('/',  userController.index) //Lista usuario
//router.get('/:id', loginRequired, userController.show) //Lista usuarios
//

router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router
