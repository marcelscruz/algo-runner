import styled from 'styled-components'

export const SidebarStyled = styled.div`
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  height: 100%;
  transition: width 0.3s ease-out;
  width: ${props => (props.isSidebarOpen ? '20rem' : '0')};
`
