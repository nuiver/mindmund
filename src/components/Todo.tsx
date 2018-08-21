import * as React from 'react'

const Todo = (props:any) => (
  <>
    <p>{props.todo.title}</p>
    <p>{props.todo.note}</p>
    <p>{props.todo.id}</p>
    <p>{props.todo.complete}</p>
    <h1>---</h1>
  </>
)

export default Todo

