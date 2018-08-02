import { Request, Response } from 'express'
import { TodoItemsDao } from '../../dao/_index'

export function create(req: Request, res: Response) {
  return TodoItemsDao.create(req.body, req.params)
    .then(todoitems => res.status(201).send(todoitems))
    .catch(error => res.status(400).send(error))
}
