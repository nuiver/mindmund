import { Request, Response } from 'express'
import { TodosDao } from '../../dao/_index'


export function list(req: Request, res: Response) {
  return TodosDao
    .findAll()
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error))
}
