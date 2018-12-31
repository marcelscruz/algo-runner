/***** React *****/
import React, { useState } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled, Main } from './AppStyled'

/***** Components *****/
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'

import evalCode from '../../web-worker/worker'

const App = () => {
  const [result, setResult] = useState('Code something!')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const evaluate = async code => {
    try {
      const result = await evalCode(code)
      setResult(`Result: ${result}`)
    } catch (error) {
      console.log(error)
      setResult(error)
    }
  }

  const toggleSidebar = () => {
    console.log('toggle sidebar')
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <ThemeProvider theme={themeDark}>
      <AppStyled>
        <GlobalStyle />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Main>
          <h1>Algo Runner</h1>
          <button onClick={toggleSidebar}>Toggle sidebar</button>
          <p>{result}</p>
          <Editor evaluate={evaluate} />
        </Main>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
