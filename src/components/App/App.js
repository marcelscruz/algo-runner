/***** React *****/
import React, { useState, useEffect } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import {
  AppStyled,
  Main,
  Header,
  Title,
  Container,
  Loading,
  Footer,
} from './AppStyled'

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
  const [result, setResult] = useState([])
  const [editorValue, setEditorValue] = useState('')
  const [editorInstance, setEditorInstance] = useState()

  useEffect(() => {
    // Fetch exercises in initial render
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

  // Reset editor value when exercise is changed,
  // position cursor and focus on editor
  useEffect(
    () => {
      currentExercise.editorPlaceholder &&
        setEditorValue(currentExercise.editorPlaceholder)

      if (editorInstance) {
        editorInstance.gotoLine(2, 4, true)
        editorInstance.focus()
      }
    },
    [currentExercise],
  )

  // Handle editor input change
  const handleEditorValueChange = value => {
    setEditorValue(value)
  }

  // Reset editor value to exercise placeholder,
  // position cursor and focus on editor
  const clearEditorValue = () => {
    setEditorValue(currentExercise.editorPlaceholder)
    editorInstance.gotoLine(2, 4, true)
    editorInstance.focus()
  }

  // Evaluate code
  const evaluate = () => {
    evalUtil(editorValue, currentExercise.tests, setResult)
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
          {editorValue ? (
            <Container>
              <InfoPanel
                currentExercise={currentExercise}
                evaluate={evaluate}
                clearEditorValue={clearEditorValue}
                result={result}
                setResult={setResult}
              />
              <Editor
                setEditorInstance={setEditorInstance}
                editorValue={editorValue}
                setEditorValue={handleEditorValueChange}
              />
            </Container>
          ) : (
            <Container>
              <Loading>Loading...</Loading>
            </Container>
          )}
          <Footer />
        </Main>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
