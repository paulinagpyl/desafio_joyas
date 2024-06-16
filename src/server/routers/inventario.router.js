import { Router } from 'express'
import * as inventarioController from '../controllers/inventario.controller.js'

const router = Router()

router.get('/joyas', inventarioController.findAll1)
router.get('/joyas/filtros', inventarioController.findAll2)
router.get('/joyas_hateoas', inventarioController.findAlljoyasHateoas)


// router.post('/medicamentos', medicamentosController.create)
// router.put('/medicamentos/:id', medicamentosController.updateById)
// router.delete('/medicamentos/:id', medicamentosController.deleteById)

export default router
