import { Request, Response } from 'express'
import { AreasDao } from '../../dao/_index'

export function create(req: Request, res: Response) {
  return AreasDao.create(req.body)
    .then(todoitems => res.status(201).send(todoitems))
    .catch(error => res.status(400).send(error))
}