import { Router } from 'express'

const addressRoute = Router()

import { getAll, getId } from '../../../controllers/stage'

addressRoute
  .route('/')
  .get(getAll)

addressRoute
  .route('/:id')
  .get(getId)

export default addressRoute
