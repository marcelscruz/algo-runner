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
  FunctionCall,
  ExpectedResult,
  ResultIcon,
  ComparisonIcon,
} from './InfoPanelStyled'

/***** Libraries *****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoPanel = ({ currentExercise, evaluate, result }) => {
  const { name, directions, examples, solutions, tests } = currentExercise

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
          <Button color="#7B7D7E">Clear</Button>
          <Button onClick={evaluate} color="#5D8634">
            Submit
          </Button>
        </ButtonsContainer>

        <ResultPanel>
          {tests &&
            tests.map((test, i) => (
              <Result key={test.test + i}>
                <FunctionCall>{test.test}</FunctionCall>
                <ComparisonIcon>===</ComparisonIcon>
                <ExpectedResult>{test.expectedResult}</ExpectedResult>
                <ResultIcon>
                  {result[i] === true ? (
                    <FontAwesomeIcon icon="check" color="#5D8634" />
                  ) : result[i] === false ? (
                    <FontAwesomeIcon icon="times" color="#95474B" />
                  ) : (
                    <FontAwesomeIcon icon="question" color="#7B7D7E" />
                  )}
                </ResultIcon>
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
  result: PropTypes.arrayOf(PropTypes.bool),
  evaluate: PropTypes.func.isRequired,
}
