import { Application } from 'express'
import { TodoItemController } from '../controllers/_index'

export function routes(app: Application) {
  // app.get('/api/todos', TodoItemController.TodoItemGet.list)
  app.post('/api/todos/:todoId/items', TodoItemController.TodoItemPost.create)
}
