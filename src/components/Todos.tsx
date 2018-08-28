import * as React from 'react'
import { AppContextConsumer } from '../AppContext'
import Todo, { TodoProps } from './Todo'

const Todos: React.SFC = () => (
  <AppContextConsumer>
    {appContext => {
      return appContext.todos.map((todo: TodoProps) => (
        <Todo id={todo.id} complete={todo.complete} title={todo.title} key={`${todo.id}-todo`} />
      ))
    }}
  </AppContextConsumer>
)

export default Todos
