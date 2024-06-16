import { Router } from 'express'
import * as inventarioController from '../controllers/inventario.controller.js'

const router = Router()

router.get('/joyas', inventarioController.findAll1)
router.get('/joyas/filtros', inventarioController.findAll2)


export default router
