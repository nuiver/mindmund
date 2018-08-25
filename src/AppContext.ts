import * as React from 'react'
import { TodoProps } from './components/Todo'

export interface AppContextInterface {
  todos: TodoProps[]
}

const ctxt = React.createContext<AppContextInterface | null >(null)

export const AppContextProvider = ctxt.Provider

export const AppContextConsumer = ctxt.Consumer
