import React from 'react'
import styled from 'styled-components'
import MetisMenu from 'react-metismenu'

export const SidebarStyled = styled.div`
  background: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  height: 100%;
  transition: width 0.3s ease-out;
  width: ${props => (props.isSidebarOpen ? '20rem' : '0')};
`

export const MetisMenuStyled = ({ content }) => {
  const Elem = styled(MetisMenu).attrs({ content })`
    border-right: 1px solid ${props => props.theme.secondary};
    height: 95%;
    left: -1px;
    position: relative;
    white-space: nowrap;
    width: 100%;
  `

  return <Elem />
}
