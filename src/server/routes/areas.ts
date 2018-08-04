import { Application } from 'express'
import { AreaController } from '../controllers/_index'

export function routes(app: Application) {
  app.get('/api/areas', AreaController.AreaGet.list)
  app.post('/api/areas', AreaController.AreaPost.create)
  // app.post('/api/appUsers/login', TodoController.AppUserPost.login)
}
