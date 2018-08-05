import { Request, Response } from 'express'
import { TodoItemsDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return TodoItemsDao.findAll()
    .then(todoitems => res.status(200).send(todoitems))
    .catch(error => res.status(400).send(error))
}
