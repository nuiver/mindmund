import { NextFunction, Request, Response } from 'express'
import { UserAttributes } from '../models/user'

// TODO: Should not be sending any passwords, even if hashed. +  Add Test.

export function getAll(req: Request, res: Response, next: NextFunction): void {
  const { User } = req.app.get('models')
  console.log(req.session)
  User.findAll()
    .then((data: UserAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function create(req: Request, res: Response, next: NextFunction): void {
  const { User } = req.app.get('models')
  const user = new User(req.body)
  user
    .save()
    .then((data: UserAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function getId(req: Request, res: Response, next: NextFunction): void {
  const { User } = req.app.get('models')
  User.findById(req.params.id)
    .then((data: UserAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function updateId(req: Request, res: Response, next: NextFunction): void {
  const { User } = req.app.get('models')
  User.update(req.body, {
    where: { id: req.params.id }
  })
    .then((data: UserAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}

export function deleteId(req: Request, res: Response, next: NextFunction): void {
  const { User } = req.app.get('models')
  User.destroy({
    where: { id: req.params.id }
  })
    .then((data: UserAttributes) => {
      res.status(200).json(data)
    })
    .catch((error: Error) => {
      next(error)
    })
}
