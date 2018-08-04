import { Request, Response } from 'express'
import { TodoItemsDao } from '../../dao/_index'

export function update(req: Request, res: Response) {
  return TodoItemsDao.find({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId,
      }
    })
  .then(todoItem => {
    if (!todoItem) {
      return res.status(404).send({
        message: 'TodoItem Not Found',
      });
    }

    return todoItem
      .update(
        // {
        // // content: req.body.content || todoItem.content,
        // // complete: req.body.complete || todoItem.complete,
        // }
      req.body, { fields: Object.keys(req.body) }  // Using ES6's Object.keys function, we extract the keys from the update object and tell the TodoItem Sequelize model to only update the fields that are present in the update data object
    )
      .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error))
}
