/***** React *****/
import React, { useState, useEffect } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled, Main, Header, Container, Footer } from './AppStyled'

/***** Components *****/
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'
import InfoPanel from '../InfoPanel/InfoPanel'

/***** API *****/
import get from '../../api/get'

/***** Utils *****/
import evalUtil from '../../utils/evaluate'

const App = () => {
  const [exercises, setContent] = useState([])
  const [currentExercise, setCurrentExercise] = useState({})
  const [userCode, setUserCode] = useState('')
  const [result, setResult] = useState('Code something!')

  useEffect(() => {
    const fetchExercises = async () => {
      const basic = await get('basic')

      setContent(basic)
      setCurrentExercise(basic[0])
    }

    fetchExercises()
  }, [])

  const evaluate = () => {
    evalUtil(userCode, currentExercise.solution, setResult)
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
          <Header>
            <h1>Algo Runner</h1>
          </Header>
          <Container>
            <InfoPanel result={result} evaluate={evaluate} />
            <Editor
              currentExercise={currentExercise}
              setUserCode={setUserCode}
            />
          </Container>
          <Footer />
        </Main>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
