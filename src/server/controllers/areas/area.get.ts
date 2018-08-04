import { Request, Response } from 'express'
import { AreasDao } from '../../dao/_index'


export function list(req: Request, res: Response) {
  return AreasDao
    .findAll()
    .then(areas => res.status(200).send(areas))
    .catch(error => res.status(400).send(error))
}
