import React, { Component } from 'react'
import '../styles/App.css'

import evalCode from '../web-worker/worker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Algo Runner</p>
          <button onClick={() => evalCode('2 + 2')}>Click!</button>
        </header>
      </div>
    )
  }
}

export default App
