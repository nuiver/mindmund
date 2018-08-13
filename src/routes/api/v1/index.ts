import { Router } from 'express'

import area from './area'
import todo from './todo'
import todoitem from './todoitem'

const router = Router()

// router.use('/authentication', authentication);
router.use('/area', area)
router.use('/todo', todo)
router.use('/todoitem', todoitem)

router.get('*', (req, res, next) => {
  res.status(404)
  // errorHander
  next(`${req.path} does not exist. See /endpoints`)
})

export default router
