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

/***** Utils *****/
import evalUtil from '../../utils/evaluate'

const App = () => {
  const [exercises, setContent] = useState([])
  const [currentExercise, setCurrentExercise] = useState({})
  const [result, setResult] = useState('Code something!')

  useEffect(() => {
    const fetchExercises = async () => {
      const basic = await get('basic')

      setContent(basic)
      setCurrentExercise(basic[0])
    }

    fetchExercises()
  }, [])

  const evaluate = code => {
    evalUtil(code, currentExercise.solution, setResult)
  }

  return (
    <ThemeProvider theme={themeDark}>
      <AppStyled>
        <GlobalStyle />
        <Sidebar
          exercises={exercises}
          setCurrentExercise={setCurrentExercise}
        />
        <Main>
          <h1>Algo Runner</h1>
          <p>{result}</p>
          <Editor currentExercise={currentExercise} evaluate={evaluate} />
        </Main>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
