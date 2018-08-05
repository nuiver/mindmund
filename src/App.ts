import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as logger from 'morgan'
import * as routes from './server/routes/_index'

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public app: express.Application

  // Run configuration methods on the Express instance.
  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  // Configure Express middleware.
  private middleware(): void {
    this.app.use(logger('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  // Configure API endpoints.
  private routes(): void {
    routes.initRoutes(this.app)
  }
}

export default new App().app
