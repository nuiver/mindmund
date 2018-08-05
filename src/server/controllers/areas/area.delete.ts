import { Request, Response } from 'express'
import { AreasDao } from '../../dao/_index'

export function destroy(req: Request, res: Response) {
  return AreasDao.findById(req.params.areaId)
    .then(area => {
      if (!area) {
        return res.status(404).send({ message: 'Area Not Found' })
      }
      return (
        area
          .destroy()
          .then(() => res.status(200).send({ message: 'Area deleted successfully.' }))
          // .then(() => res.status(204).send()) // This line returns a 204 no content and can be in the end be more useful and replace the previous line
          .catch(error => res.status(400).send(error))
      )
    })
    .catch(error => res.status(400).send(error))
}
