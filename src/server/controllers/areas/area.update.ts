import { Request, Response } from 'express'
import { AreasDao } from '../../dao/_index'

export function update(req: Request, res: Response) {
  return AreasDao.findById(req.params.areaId).then(area => {
    if (!area) {
      return res.status(404).send({
        message: 'Area Not Found'
      })
    }

    return area
      .update(req.body, { fields: Object.keys(req.body) }) // Using ES6's Object.keys function, we extract the keys from the update object and tell the Area Sequelize model to only update the fields that are present in the update data object
      .then(updatedArea => res.status(200).send(updatedArea))
      .catch(error => res.status(400).send(error))
  })
}
