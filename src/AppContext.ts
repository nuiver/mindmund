import * as React from 'react'
import { TodoFullProps } from './components/Todo'

export interface AppContextInterface {
  todos: TodoFullProps[]
}

const ctxt = React.createContext<AppContextInterface | null >(null)

export const AppContextProvider = ctxt.Provider

export const AppContextConsumer = ctxt.Consumer
