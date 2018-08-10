import { Router } from 'express'

const addressRoute = Router()

import {
  create,
  // deleteId,
  getAll,
  getId,
  // updateId,
} from '../../../controllers/todo'

addressRoute
  .route('/')
  // .get(isLoggedIn, getAll)
  // .post(isLoggedIn, create);
  .get(getAll)
  .post(create)

addressRoute
  .route('/:id')
  .get(getId)
  // .patch(isLoggedIn, updateId)
  // .delete(isLoggedIn, deleteId);
  // .get(getId)
  // .patch(updateId)
  // .delete(deleteId);

export default addressRoute
