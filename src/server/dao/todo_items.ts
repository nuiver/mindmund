import * as uuid from 'uuid'
import db from '../models/_index'
import { TodoItemInstance } from '../models/todo_item'

export function create(todoItem: TodoItemInstance, requestParams): Promise<any> {
  return db.TodoItem.create({
    content: todoItem.content,
    todoId: requestParams.todoId,
  })
}

export function findAll(): Promise<any> {
  return db.TodoItem.findAll()
}
