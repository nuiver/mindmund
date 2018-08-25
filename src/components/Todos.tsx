import * as React from 'react'
import { AppContextConsumer } from '../AppContext'
import { TodoProps } from './Todo'
import Todo from './Todo'

const Todos: React.SFC = () => (
  <AppContextConsumer>
    {appContext => {
      return appContext.todos.map((todo: TodoProps) => <Todo {...todo} key={todo.id} id={todo.id} />)
    }}
  </AppContextConsumer>
)

export default Todos
