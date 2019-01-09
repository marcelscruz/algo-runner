import styled from 'styled-components'

export const FooterStyled = styled.div`
  align-items: center;
  background: ${props => props.theme.primary};
  display: flex;
  font-size: 0.9rem;
  height: 1.5rem;
  justify-content: flex-end;
  left: -2px; /* Cover left border */
  padding-right: 0.5rem;
  position: relative;
  width: calc(100% + 2px); /* Compensate left border */

  .svg-inline--fa {
    color: ${props => props.theme.titleColor};
    cursor: pointer;
    margin-right: 0.5rem;
    transition: color 0.3s;
  }

  .svg-inline--fa:hover {
    color: ${props => props.theme.textColor};
  }
`

export const SocialMediaLink = styled.a``
