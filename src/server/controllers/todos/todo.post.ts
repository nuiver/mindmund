import { Request, Response } from 'express'
import { TodosDao } from '../../dao/_index'

export function create(req: Request, res: Response) {
  return TodosDao.create(req.body)
    .then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error))
}
