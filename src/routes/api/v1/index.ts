import { NextFunction, Request, Response, Router } from 'express'

import todo from './todo'

const router = Router()

// router.use('/authentication', authentication);
router.use('/todo', todo)

router.get('*', (req, res, next) => {
  res.status(404)
  // errorHander
  next(`${req.path} does not exist. See /endpoints`)
})

export default router
