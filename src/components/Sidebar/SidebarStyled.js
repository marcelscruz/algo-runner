import styled from 'styled-components'

export const SidebarStyled = styled.aside`
  border-right: 1px solid ${props => props.theme.secondary};
  background: ${props => props.theme.primary};
  height: 100%;
`
