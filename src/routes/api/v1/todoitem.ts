import { Router } from 'express'

const addressRoute = Router()

import { create, deleteId, getAll, updateId } from '../../../controllers/todoitem'

addressRoute
.route('/')
.get(getAll)
.post(create)

addressRoute
  .route('/:id')
  .patch(updateId)
  .delete(deleteId)

export default addressRoute
