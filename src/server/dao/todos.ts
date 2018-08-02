import * as uuid from 'uuid'
import db from '../models/_index'
import { TodoInstance } from '../models/todo'

export function create(todo: TodoInstance): Promise<any> {
  return db.Todo.create({
    title: todo.title
  })
}

export function findAll(): Promise<any> {
  return db.Todo.findAll()
}
