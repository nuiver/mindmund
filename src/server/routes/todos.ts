import { Application } from 'express'
import { TodoController } from '../controllers/_index'

export function routes(app: Application) {
  app.get('/api/todos', TodoController.TodoGet.list)
  app.get('/api/todos/:todoId', TodoController.TodoGet.retrieve)
  app.post('/api/todos', TodoController.TodoPost.create)
  // app.post('/api/appUsers/login', TodoController.AppUserPost.login)
}
