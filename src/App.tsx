import * as React from 'react'
import styled from 'styled-components'
import { AppContextProvider } from './AppContext'
import { TodoProps } from './components/Todo'

import Todos from './components/Todos'

const StyledWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`

interface AppState {
  todos: TodoProps[]
  }

class App extends React.Component<{}, AppState> {

  constructor(props: any){
      super(props);
      this.state = {todos: []}
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        const arr: TodoProps[] = Object.keys(res).map( (i) => {
          return res[i];
        });
        this.setState({ todos: arr })
      })
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/v1/todo/')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(response.status.toString())
    }
    return body
  }

  render() {
    return (
      <AppContextProvider value={this.state}>
        <StyledWrapper className="App">
          <Todos />
        </StyledWrapper>
      </AppContextProvider>
    )
  }
}

export default App
