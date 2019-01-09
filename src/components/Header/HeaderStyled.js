import styled from 'styled-components'

export const HeaderStyled = styled.div`
  align-items: center;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.titleColor};
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  left: -2px; /* Cover left border */
  padding: 0 3rem;
  position: relative;
  width: calc(100% + 2px); /* Compensate left border */
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: uppercase;
`

export const TitleSub = styled.span`
  font-size: 1rem;
`
