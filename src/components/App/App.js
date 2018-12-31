/***** React *****/
import React, { useState } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled } from './AppStyled'

/***** Components *****/
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'

import evalCode from '../../web-worker/worker'

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

      <ThemeProvider theme={themeDark}>
        <AppStyled>
          <h1>Algo Runner</h1>
          <Sidebar />
          <p>{result}</p>
          <Editor evaluate={evaluate} />
        </AppStyled>
      </ThemeProvider>
    </>
  )
}

export default App
