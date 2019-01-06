/***** React *****/
import React, { useState, useEffect } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled, Main, Header, Title, Container, Footer } from './AppStyled'

/***** Components *****/
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'
import InfoPanel from '../InfoPanel/InfoPanel'

/***** API *****/
// import get from '../../api/get'

/***** DB *****/
import db from '../../db/db.js'

/***** Utils *****/
import evalUtil from '../../utils/evaluate'

const App = () => {
  const [exercises, setContent] = useState([])
  const [currentExercise, setCurrentExercise] = useState({})
  const [userCode, setUserCode] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchExercises = async () => {
      // Use with json-server
      // const basic = await get('basic')
      // setContent(basic)
      // setCurrentExercise(basic[0])

      // Use with static db
      setContent(db.basic)
      setCurrentExercise(db.basic[0])
    }

    fetchExercises()
  }, [])

  const evaluate = () => {
    evalUtil(userCode, currentExercise.tests, setResult)
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
            <Title>Algo Runner</Title>
          </Header>
          <Container>
            <InfoPanel
              currentExercise={currentExercise}
              evaluate={evaluate}
              result={result}
            />
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
