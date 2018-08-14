import { NextFunction, Request, Response } from 'express'
import { StageAttributes } from '../models/stage'

export function getAll(req: Request, res: Response, next: NextFunction): void {
  const { Stage, Todo, TodoItem } = req.app.get('models')
  Stage.findAll({ include: [{ model: Todo, as: 'todos'}] })
    .then((data: StageAttributes[]) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      console.log(error)
      next(error)
    })
}

export function getId(req: Request, res: Response, next: NextFunction): void {
  const { Stage, Todo, TodoItem } = req.app.get('models')
  Stage.findById(req.params.id, {
    include: [{ model: Todo, as: 'todos', include: [{ model: TodoItem, as: 'todoItems' }] }]
  })
    .then((data: StageAttributes) => {
      res.json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}
