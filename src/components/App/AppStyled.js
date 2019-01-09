import styled from 'styled-components'

export const AppStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

export const Main = styled.main`
  background: ${props => props.theme.primary};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.borderColor};
  border-left: none;
  border-right: none;
  height: 100%;
  display: flex;
  width: 100%;
`

export const Loading = styled.h3`
  font-size: 2rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
`
