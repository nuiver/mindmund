import * as bodyParser from 'body-parser'
import express, { Application, NextFunction, Request, Response } from 'express'
import session from 'express-session'
// import validator from 'express-validator'
import morgan from 'morgan'
import passport from 'passport'
import path from 'path'

// import * as dotenv from 'dotenv';
// const env = dotenv.config();
import './config/passport.js'

import * as models from './models'
import router from './routes/index'

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  app: Application

  // Run configuration methods on the Express instance.
  constructor() {
    this.app = express()
    this.config()
    this.middleware()
    this.routes()
    this.errors()
  }

  private config(): void {
    const envPort = process.env.NODE_ENV === 'testing' ? process.env.PORT_TEST : process.env.PORT
    this.app.set('port', envPort || 3000)
    this.app.set('host', process.env.HOST || '127.0.0.1')
    // this.app.set('view engine', 'pug')
    // if (process.env.NODE_ENV === 'development') {
    //   this.app.set('view options', { debug: true, compileDebug: true })
    // }
    this.app.use(express.static(path.join(__dirname, '../public')))
  }

  private middleware(): void {
    this.app.set('models', models)
    // this.app.use(
    //   (req: Request, res: Response, next: NextFunction): void => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header(
    //       'Access-Control-Allow-Methods',
    //       'PUT, GET, POST, DELETE, OPTIONS'
    //     );
    //     res.header(
    //       'Access-Control-Allow-Headers',
    //       'Origin, X-Requested-With, Content-Type, Accept, Authorization, ' +
    //       'Access-Control-Allow-Credentials'
    //     );
    //     res.header('Access-Control-Allow-Credentials', 'true');
    //     next();
    //   }
    // );
    this.app.use(morgan('combined'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET || 'keyboard cat'
      })
    )
    this.app.use(passport.initialize())
    this.app.use(passport.session())
    // this.app.use(
    //   (req: Request, res: Response, next: NextFunction): void => {
    //     res.locals.session = req.session;
    //     next();
    //   }
    // );
    // // TODO: express-validator validations
    // this.app.use(validator());
  }

  // Configure API endpoints.
  private routes(): void {
    this.app.use(router)
  }

  private errors(): void {
    // TODO: error handlers / logging
    // http://thecodebarbarian.com/80-20-guide-to-express-error-handling.html
    this.app.use(
      (error: Error, request: Request, res: Response, next: NextFunction): void => {
        if (error) {
          res.send({ error })
        } else {
          return next()
        }
      }
    )
  }
}

export default new App().app
