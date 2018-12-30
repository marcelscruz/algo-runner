/***** React *****/
import React, { Component } from 'react'

/***** Style *****/
import GlobalStyle from '../styles/globalStyle'

import evalCode from '../web-worker/worker'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <main>
          <p>Algo Runner</p>
          <button onClick={() => evalCode('2 + 2')}>Click!</button>
        </main>
      </>
    )
  }
}

export default App
