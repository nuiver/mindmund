import { Application } from 'express'
import { TodoItemController } from '../controllers/_index'

export function routes(app: Application) {
  app.post('/api/todos/:todoId/items', TodoItemController.TodoItemPost.create)
  app.put('/api/todos/:todoId/items/:todoItemId', TodoItemController.TodoItemUpdate.update)
  app.delete('/api/todos/:todoId/items/:todoItemId', TodoItemController.TodoItemDelete.destroy)
}
