/***** React *****/
import React, { useState, useEffect } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled, Main } from './AppStyled'

/***** Components *****/
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'

/***** API *****/
import get from '../../api/get'

import evalCode from '../../web-worker/worker'

const App = () => {
  const [result, setResult] = useState('Code something!')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [content, setContent] = useState([])
  const [currentExercise, setCurrentExercise] = useState({})

  useEffect(() => {
    ;(async () => {
      const basic = await get('basic')

      console.log(basic)

      setContent(basic)
      setCurrentExercise(basic[0])
    })()
  }, [])

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
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          content={content}
        />
        <Main>
          <h1>Algo Runner</h1>
          <button onClick={toggleSidebar}>Toggle sidebar</button>
          <p>{result}</p>
          <Editor currentExercise={currentExercise} evaluate={evaluate} />
        </Main>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
