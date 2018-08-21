import * as React from 'react'
import './App.css'
import { AppContextProvider } from './AppContext'

import Todos from './components/Todos'
import logo from './logo.svg'

// const TodoContext: AppContextInterface = {
//   name: 'Using React Context in a Typescript App',
//   author: 'thehappybug',
//   url: 'http://www.example.com'
// }

class App extends React.Component {
  state = {
    todos: ['this','that']
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        const arr:any[] = Object.keys(res).map( (i) => {
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
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {/* <h1>{console.log(this.state.users) as any}</h1> */}
          <Todos />
        </div>
      </AppContextProvider>
    )
  }
}

export default App
