import { Router } from 'express'
const user = Router()

import { login, logout, register } from '../../../controllers/authentication'
import { create, deleteId, getAll, getId, updateId } from '../../../controllers/user'

user
  .route('/')
  .get(getAll)
  .post(create)
user
  .route('/:id')
  .get(getId)
  .patch(updateId)
  .delete(deleteId)

user.route('/register').post(register)
user.route('/login').post(login)
user.route('/logout').post(logout)

export default user
