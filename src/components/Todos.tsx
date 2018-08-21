import * as React from 'react'
import { AppContextConsumer } from '../AppContext'
import Todo from './Todo'

const Todos = () => (
  <AppContextConsumer>
    {appContext =>
       (
        appContext.todos.map((todo: any) => <Todo todo={todo} key={todo.id} id={todo.id} />)
      )
    }
  </AppContextConsumer>
)

export default Todos
