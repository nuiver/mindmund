import { Router } from 'express'

import apiV1 from './api/v1'

const router = Router()

router.use('/api/v1', apiV1)
router.use('/home', (req, res, next) => {
  res.render('splash')
})

router.get('*', (req, res, next) => {
  res.status(404)
  next(`${req.path} does not exist. See /endpoints`)
})

export default router
