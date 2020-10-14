import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesControllers from './controllers/OrphanagesControllers'

const OrphanagesControllersInstance = new OrphanagesControllers()

const routes = Router()
const upload = multer(uploadConfig)

routes.post(
  '/orphanages',
  upload.array('images'),
  OrphanagesControllersInstance.create,
)
routes.get('/orphanages/:id', OrphanagesControllersInstance.show)
routes.get('/orphanages', OrphanagesControllersInstance.index)

export default routes
