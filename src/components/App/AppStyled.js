import styled from 'styled-components'

export const AppStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const Main = styled.main`
  background: ${props => props.theme.primary};
  height: 100%;
  width: 100%;
`
