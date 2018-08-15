import { NextFunction, Request, Response } from 'express'
import { TodoItemAttributes } from '../models/todoitem'

export function getAll(req: Request, res: Response, next: NextFunction): void {
  const { TodoItem } = req.app.get('models')
  TodoItem.all()
    .then((data: TodoItemAttributes[]) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function create(req: Request, res: Response, next: NextFunction): void {
  const { TodoItem } = req.app.get('models')
  const todo = new TodoItem(req.body)
  todo
    .save()
    .then((data: TodoItemAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function getId(req: Request, res: Response, next: NextFunction): void {
  const { TodoItem } = req.app.get('models')
  TodoItem.findById(req.params.id)
    .then((data: TodoItemAttributes) => {
      res.json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function updateId(req: Request, res: Response, next: NextFunction): void {
  const { TodoItem } = req.app.get('models')
  TodoItem.update(req.body, { returning: true, where: { id: req.params.id } })
    .then((data: TodoItemAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function deleteId(req: Request, res: Response, next: NextFunction): void {
  const { TodoItem } = req.app.get('models')
  TodoItem.destroy({ returning: true, where: { id: req.params.id } })
    .then((data: TodoItemAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}
