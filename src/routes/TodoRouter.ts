import { Router, Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/mundmindDB'
const mongotodo = MongoClient.connect(
  uri,
  (err, client) => {
    if (err) {
      throw err
    }

    const db = client.db('mundmindDB')

    db.collection('todos')
      .find()
      .toArray((finderr, result) => {
        if (finderr) {
          throw finderr
        }
        return result
      })
    client.close()
  }
)

console.log(mongotodo)

export class TodoRouter {
  router: Router

  /**
   * Initialize the TodoRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Todos.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(mongotodo)
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the TodoRouter, and export its configured Express.Router
const todoRoutes = new TodoRouter();
todoRoutes.init();

export default todoRoutes.router;