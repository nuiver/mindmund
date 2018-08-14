import { Router } from 'express'

import area from './area'
import stage from './stage'
import todo from './todo'
import todoitem from './todoitem'

const router = Router()

// router.use('/authentication', authentication);
router.use('/area', area)
router.use('/stage', stage)
router.use('/todo', todo)
router.use('/todoitem', todoitem)

router.get('*', (req, res, next) => {
  res.status(404)
  // errorHander
  next(`${req.path} does not exist. See /endpoints`)
})

export default router
