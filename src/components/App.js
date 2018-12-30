/***** React *****/
import React, { useState } from 'react'

/***** Style *****/
import GlobalStyle from '../styles/globalStyle'

/***** Components *****/
import Editor from '../components/Editor/Editor'

import evalCode from '../web-worker/worker'

const App = () => {
  const [result, setResult] = useState('Code something!')

  const evaluate = async code => {
    try {
      const result = await evalCode(code)
      setResult(`Result: ${result}`)
    } catch (error) {
      console.log(error)
      setResult(error)
    }
  }

  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Algo Runner</h1>
        <p>{result}</p>
        <Editor evaluate={evaluate} />
      </main>
    </>
  )
}

export default App
