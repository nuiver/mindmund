import { Request, Response } from 'express'
import { TodosDao } from '../../dao/_index'


export function list(req: Request, res: Response) {
  return TodosDao
    .findAll()
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error))
}

export function retrieve(req: Request, res: Response) {
  return TodosDao
    .findById(req.params.todoId)
    .then(todo => {
          if (!todo) {
            return res.status(404).send({
              message: 'Todo Not Found',
            });
          }
          return res.status(200).send(todo);
        })
    .catch(error => res.status(400).send(error))
}

// retrieve(req, res) {
//   return Todo
//     .findById(req.params.todoId, {
//       include: [{
//         model: TodoItem,
//         as: 'todoItems',
//       }],
//     })
//     .then(todo => {
//       if (!todo) {
//         return res.status(404).send({
//           message: 'Todo Not Found',
//         });
//       }
//       return res.status(200).send(todo);
//     })
//     .catch(error => res.status(400).send(error));
// }