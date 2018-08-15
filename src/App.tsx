import * as React from 'react'
import './App.css'

import logo from './logo.svg'

class App extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ firstName: res.firstName, lastName: res.lastName }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/v1/user/1')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(response.status.toString())
    }
    return body
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.firstName} {this.state.lastName}
        </p>
      </div>
    )
  }
}

export default App
