/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Styles *****/
import {
  InfoPanelContainer,
  TopContainer,
  BottomContainer,
  ExerciseTitle,
  Directions,
  SectionTitle,
  ExamplesList,
  Example,
  SolutionsList,
  Solution,
  ButtonsContainer,
  Button,
  ResultPanel,
  Result,
  ResultIcon,
  FunctionCall,
  ComparisonIcon,
  ExpectedResult,
} from './InfoPanelStyled'
import { defaultColors } from '../../styles/theme'

/***** Libraries *****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoPanel = ({
  currentExercise,
  clearEditorValue,
  evaluate,
  results,
}) => {
  const { name, directions, examples, solutions, tests } = currentExercise
  const { green, grey, red } = defaultColors

  const handleClearEditorValue = () => {
    clearEditorValue()
  }

  return (
    <InfoPanelContainer>
      <TopContainer>
        <ExerciseTitle>{name}</ExerciseTitle>
        <Directions>{directions}</Directions>

        {examples && (
          <>
            <SectionTitle>Examples</SectionTitle>
            <ExamplesList>
              {examples.map((example, i) => (
                <Example key={i + example}>{example}</Example>
              ))}
            </ExamplesList>
          </>
        )}

        {solutions && (
          <>
            <SectionTitle>Solutions</SectionTitle>
            <SolutionsList>
              {solutions.map((solution, i) => (
                <Solution key={i + solution}>{solution}</Solution>
              ))}
            </SolutionsList>
          </>
        )}
      </TopContainer>

      <BottomContainer>
        <ButtonsContainer>
          <Button onClick={handleClearEditorValue} color={grey}>
            Clear
          </Button>
          <Button onClick={evaluate} color={green}>
            Submit
          </Button>
        </ButtonsContainer>

        <ResultPanel>
          <SectionTitle>Results</SectionTitle>
          {tests &&
            tests.map((test, i) => (
              <Result
                key={test.test + i}
                background={
                  results[i] === true
                    ? green
                    : results[i] === false
                    ? red
                    : 'transparent'
                }
              >
                <ResultIcon>
                  {results[i] === true ? (
                    <FontAwesomeIcon icon="check" color={green} />
                  ) : (
                    results[i] === false && (
                      <FontAwesomeIcon icon="times" color={red} />
                    )
                  )}
                </ResultIcon>
                <FunctionCall>{test.test}</FunctionCall>
                <ComparisonIcon>===</ComparisonIcon>
                <ExpectedResult>{test.expectedResult}</ExpectedResult>
              </Result>
            ))}
        </ResultPanel>
      </BottomContainer>
    </InfoPanelContainer>
  )
}

export default InfoPanel

InfoPanel.propTypes = {
  currentExercise: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.string),
    directions: PropTypes.string,
    solutions: PropTypes.arrayOf(PropTypes.string),
    tests: PropTypes.arrayOf(PropTypes.object),
  }),
  evaluate: PropTypes.func.isRequired,
  clearEditorValue: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.bool),
}
