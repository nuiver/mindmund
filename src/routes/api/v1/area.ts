import { Router } from 'express'

const addressRoute = Router()

import { create, deleteId, getAll, getId, updateId } from '../../../controllers/area'

addressRoute
  .route('/')
  .get(getAll)
  .post(create)

addressRoute
  .route('/:id')
  .get(getId)
  .patch(updateId)
  .delete(deleteId)

export default addressRoute
