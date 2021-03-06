import styled, { keyframes } from 'styled-components'
import fonts from '../../styles/fonts'

export const InfoPanelContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  overflow-y: scroll;
  padding: 3rem 7rem 2rem;
  width: 100%;
`

export const BottomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40%;
  padding: 2rem 7rem 3rem;
  width: 100%;
`

export const ExerciseTitle = styled.h2`
  font-family: ${fonts.secondary}, sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
`

export const Directions = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const SectionTitle = styled.h3`
  color: ${props => props.theme.titleColor};
  font-family: ${fonts.secondary}, sans-serif;
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
  margin-top: 0.5rem;
  text-transform: uppercase;
`

export const ExamplesList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`

export const Example = styled.li`
  margin: 0.1rem 0;
  font-size: 1rem;
`

export const SolutionsList = styled.ol``

export const Solution = styled.li`
  margin: 0.1rem 0;
  font-size: 1rem;
`

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
`

export const ResultPanel = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 80%;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`

const resultBackgroundFadeInOut = color => keyframes`
  from {
    background: ${color};
  }

  to {
    background: transparent;
  }
`

export const Result = styled.div`
  animation: ${({ background }) => resultBackgroundFadeInOut(background)} 2s;
  left: -1.8rem;
  margin: 0.1rem 0;
  padding: 0 0.5rem;
  position: relative;
`

export const ResultIcon = styled.span`
  display: inline-block;
  margin-right: 0.3rem;
  min-width: 1rem;

  .fa-question {
    width: 0.6rem !important;
  }
`

export const FunctionCall = styled.span``

export const ComparisonIcon = styled.span`
  color: ${props => props.theme.titleColor};
  margin: 0 0.5rem;
`

export const ExpectedResult = styled.span``
