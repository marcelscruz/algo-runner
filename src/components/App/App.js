/***** React *****/
import React, { useState, useEffect } from 'react'

/***** Styles *****/
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { themeDark } from '../../styles/theme'
import { AppStyled, Main, Container, Loading } from './AppStyled'

/***** Libraries *****/
import Hotkeys from 'react-hot-keys'

/***** Components *****/
import Header from '../Header/Header'
import Editor from '../Editor/Editor'
import Sidebar from '../Sidebar/Sidebar'
import InfoPanel from '../InfoPanel/InfoPanel'
import Footer from '../Footer/Footer'

/***** API *****/
// import get from '../../api/get'

/***** DB *****/
import db from '../../db/db.js'

/***** Utils *****/
import evalUtil from '../../utils/evaluate'

const App = () => {
  const [exercisesList, setExercisesList] = useState([])
  const [currentExercise, setCurrentExercise] = useState({})
  const [results, setResults] = useState([])
  const [editorValue, setEditorValue] = useState('')
  const [editorInstance, setEditorInstance] = useState()

  useEffect(() => {
    // Fetch exercises in initial render
    const fetchExercises = async () => {
      setExercisesList(db.basic)
      setCurrentExercise(db.basic[0])
    }

    fetchExercises()
  }, [])

  // Reset editor value when exercise is changed,
  // position cursor and focus on editor
  useEffect(() => {
    currentExercise.editorPlaceholder &&
      setEditorValue(currentExercise.editorPlaceholder)

    if (editorInstance) {
      editorInstance.gotoLine(2, 4, true)
      editorInstance.focus()
    }
  }, [currentExercise])

  // Reset editor value to exercise placeholder,
  // position cursor and focus on editor
  const clearEditorValue = () => {
    setEditorValue(currentExercise.editorPlaceholder)
    editorInstance.gotoLine(2, 4, true)
    editorInstance.focus()
  }

  // Handle editor input change
  const handleEditorValueChange = value => {
    setEditorValue(value)
  }

  // Evaluate code
  const evaluate = () => {
    evalUtil(editorValue, currentExercise.tests, setResults)
  }

  const handleSubmitShortcut = () => {
    evaluate()
  }

  return (
    <ThemeProvider theme={themeDark}>
      <AppStyled>
        <GlobalStyle />

        <Sidebar
          exercisesList={exercisesList}
          setCurrentExercise={setCurrentExercise}
          setResults={setResults}
        />
        <Main>
          <Header />
          {editorValue ? (
            <Container>
              <Hotkeys
                keyName="cmd+enter,ctrl+enter"
                onKeyUp={handleSubmitShortcut}
              >
                <InfoPanel
                  currentExercise={currentExercise}
                  clearEditorValue={clearEditorValue}
                  evaluate={evaluate}
                  results={results}
                />
                <Editor
                  setEditorInstance={setEditorInstance}
                  editorValue={editorValue}
                  setEditorValue={handleEditorValueChange}
                />
              </Hotkeys>
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
