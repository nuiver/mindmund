import { NextFunction, Request, Response } from 'express'
import { AreaAttributes } from '../models/area'

export function getAll(req: Request, res: Response, next: NextFunction): void {
  const { Area, Todo, TodoItem } = req.app.get('models')
  Area.findAll({ include: [{ model: Todo, as: 'todos', include: [{ model: TodoItem, as: 'todoItems' }] }] })
    .then((data: AreaAttributes[]) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      console.log(error)
      next(error)
    })
}

export function create(req: Request, res: Response, next: NextFunction): void {
  const { Area } = req.app.get('models')
  const todo = new Area(req.body)
  todo
    .save()
    .then((data: AreaAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function getId(req: Request, res: Response, next: NextFunction): void {
  const { Area } = req.app.get('models')
  Area.findById(req.params.id)
    .then((data: AreaAttributes) => {
      res.json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function updateId(req: Request, res: Response, next: NextFunction): void {
  const { Area } = req.app.get('models')
  Area.update(req.body, { returning: true, where: { id: req.params.id } })
    .then((data: AreaAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function deleteId(req: Request, res: Response, next: NextFunction): void {
  const { Area } = req.app.get('models')
  Area.destroy({ returning: true, where: { id: req.params.id } })
    .then((data: AreaAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}
