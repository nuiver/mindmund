import { Application } from 'express'
import { AreaController } from '../controllers/_index'

export function routes(app: Application) {
  app.get('/api/areas', AreaController.AreaGet.list)
  app.get('/api/areas/:areaId', AreaController.AreaGet.retrieve)
  app.post('/api/areas', AreaController.AreaPost.create)
  app.put('/api/areas/:areaId', AreaController.AreaUpdate.update)
  app.delete('/api/areas/:areaId', AreaController.AreaDelete.destroy)
}
