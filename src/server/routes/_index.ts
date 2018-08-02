import { Application, Request, Response } from 'express'
import * as TodoItemRoutes from './todo_items'
import * as TodoRoutes from './todos'

export function initRoutes(app: Application) {
  app.get('/api', (req: Request, res: Response) =>
    res.status(200).send({
      message: 'The server is running!'
    })
  )

  TodoItemRoutes.routes(app)
  TodoRoutes.routes(app)

  app.all('*', (req: Request, res: Response) =>
    res.status(200).send({ message: 'Welcome to the beginning of nothingness.' })
  )
}
