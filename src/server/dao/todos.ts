// import * as uuid from 'uuid'
import db from '../models/_index'
import { TodoInstance } from '../models/todo'

export function create(todo: TodoInstance): Promise<any> {
  return db.Todo.create({
    title: todo.title,
    note: todo.note
  })
}


export function findAll(): Promise<any> {
  return db.Todo.findAll(
    { include: [{ model: db.TodoItem, as: 'todoItems' }] }
  )
}
