import { NextFunction, Request, Response } from 'express'
import { TodoAttributes } from '../models/todo'

export function getAll(req: Request, res: Response, next: NextFunction): void {
  const { Todo, TodoItem } = req.app.get('models')
  Todo.findAll({ include: [{ model: TodoItem, as: 'todoItems' }] })
    .then((data: TodoAttributes[]) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

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

export function getId(req: Request, res: Response, next: NextFunction): void {
  const { Todo, TodoItem } = req.app.get('models')
  Todo.findById(req.params.id, {
    include: [
      {
        model: TodoItem,
        as: 'todoItems'
      }
    ]
  })
    .then((data: TodoAttributes) => {
      res.json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function updateId(req: Request, res: Response, next: NextFunction): void {
  const { Todo } = req.app.get('models')
  Todo.update(req.body, { returning: true, where: { id: req.params.id } })
    .then((data: TodoAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function deleteId(req: Request, res: Response, next: NextFunction): void {
  const { Todo } = req.app.get('models')
  Todo.destroy({ returning: true, where: { id: req.params.id } })
    .then((data: TodoAttributes) => {
      res.status(200).send({ message: 'Todo deleted successfully.' })
    })
    .catch((error: Error) => {
      next(error)
    })
}
