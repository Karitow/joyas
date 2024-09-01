import { Router } from 'express'
import { notFound } from '../controller/errorsController.js'

const router = Router()
//todas las rutas 
router.all('*', notFound)

export default router