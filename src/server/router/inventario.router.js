import { Router } from 'express'
import { getJoyas, getJoyasFiltros } from '../controller/inventarioController.js'

const router = Router()

router.get('/joyas', getJoyas)
router.get('/joyas/filtros', getJoyasFiltros)

export default router