import { Application } from 'express'
import { TodoController } from '../controllers/_index'

export function routes(app: Application) {
         app.get('/api/todos', TodoController.TodoGet.list)
         app.post('/api/todos', TodoController.TodoPost.create)
         // app.post('/api/appUsers/login', TodoController.AppUserPost.login)
       }
