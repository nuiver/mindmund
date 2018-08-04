import { Request, Response } from 'express'
import { TodoItemsDao } from '../../dao/_index'

export function destroy(req: Request, res: Response) {
  return TodoItemsDao.find({
    where: {
      id: req.params.todoItemId,
      todoId: req.params.todoId
    }
  })
  .then(todoItem => {
    if (!todoItem) {
      return res.status(404).send({
        message: 'TodoItem Not Found'
      })
    }

  return todoItem
    .destroy()
    .then(() => res.status(200).send({ message: 'Todo item deleted successfully.' }))
    // .then(() => res.status(204).send()) // This line returns a 204 no content and can be in the end be more useful and replace the previous line
    .catch(error => res.status(400).send(error))
  })

  .catch(error => res.status(400).send(error))
}
