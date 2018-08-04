import { Request, Response } from 'express'
import { TodosDao } from '../../dao/_index'

export function update(req: Request, res: Response) {
  return TodosDao.findById(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({ message: 'Todo Not Found' })
      }
      return todo
        .update({ title: req.body.title || todo.title })
        .then(() => res.status(200).send(todo)) // Send back the updated todo.
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}
