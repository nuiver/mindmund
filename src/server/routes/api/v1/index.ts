import { Router } from 'express'

import area from './area'
import stage from './stage'
import todo from './todo'
import todoitem from './todoitem'
import user from './user'

const router = Router()

router.use('/area', area)
router.use('/stage', stage)
router.use('/todo', todo)
router.use('/todoitem', todoitem)
router.use('/user', user)

router.get('*', (req, res, next) => {
  res.status(404)
  // errorHander
  next(`${req.path} does not exist. See /endpoints`)
})

export default router
