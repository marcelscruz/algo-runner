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
} from './InfoPanelStyled'

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
          <table>
            <tbody>
              {tests &&
                tests.map((test, i) => (
                  <tr key={i + test.test}>
                    <td>{test.test}</td>
                    <td>{test.expectedResult}</td>
                    <td>
                      {result[i] === true
                        ? 'Correct'
                        : result[i] === false
                        ? 'Wrong'
                        : 'Try!'}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {console.log(currentExercise)}
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
  }),
  result: PropTypes.arrayOf(PropTypes.bool),
  evaluate: PropTypes.func.isRequired,
}
