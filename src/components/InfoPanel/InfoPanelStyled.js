import styled from 'styled-components'

export const InfoPanelContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.secondary};
  /* background: red; */
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 3rem 7rem;
`

export const TopContainer = styled.div`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
`

export const BottomContainer = styled.div`
  align-items: center;
  /* background: green; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40%;
  width: 100%;
`

export const ExerciseTitle = styled.h2`
  color: ${props => props.theme.titleColor};
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-size: 1rem;
`

export const SolutionsList = styled.ol`
  /* font-size: 0.9rem; */
`

export const Solution = styled.li`
  font-size: 1rem;
`

export const ButtonsContainer = styled.div`
  align-items: center;
  /* background: yellow; */
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
`

export const Submit = styled.button``

export const Clear = styled.button``

export const ResultPanel = styled.div`
  /* background: grey; */
  height: 80%;
  align-self: flex-end;
  width: 100%;
`
