import { NextFunction, Request, Response } from 'express'
import { TodoAttributes } from '../models/todo'

export function create(req: Request, res: Response, next: NextFunction): void {
  const { Todo } = req.app.get('models')
  const todo = new Todo(req.body)
  todo
    .save()
    .then((data: TodoAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}
