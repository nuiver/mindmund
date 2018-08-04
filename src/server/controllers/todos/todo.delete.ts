import { Request, Response } from 'express'
import { TodosDao } from '../../dao/_index'

export function destroy(req: Request, res: Response) {
  return TodosDao.findById(req.params.todoId)
    .then(todo => {
      if (!todo) {
        return res.status(404).send({ message: 'Todo Not Found' })
      }
      return (
        todo
          .destroy()
          .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
          // .then(() => res.status(204).send()) // This line returns a 204 no content and can be in the end be more useful and replace the previous line
          .catch(error => res.status(400).send(error))
      )
    })
    .catch(error => res.status(400).send(error))
}
