import { Request, Response } from 'express'
import { AreasDao } from '../../dao/_index'


export function list(req: Request, res: Response) {
  return AreasDao
    .findAll()
    .then(areas => res.status(200).send(areas))
    .catch(error => res.status(400).send(error))
}

export function retrieve(req: Request, res: Response) {
  return AreasDao.findById(req.params.areaId)
    .then(area => {
      if (!area) {
        return res.status(404).send({ message: 'Area Not Found' })
      }
      return res.status(200).send(area)
    })
    .catch(error => res.status(400).send(error))
}