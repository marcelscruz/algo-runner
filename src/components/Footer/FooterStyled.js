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

  .svg-inline--fa.active {
    color: ${props => props.theme.textColor};
  }

  .svg-inline--fa:hover {
    color: ${props => props.theme.textColor};
  }
`

export const TooltipTitle = styled.h5`
  color: ${props => props.theme.titleColor};
  display: inline-block;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
`

export const TooltipTitleSub = styled.h5`
  color: ${props => props.theme.titleColor};
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 100;
  text-transform: uppercase;
`

export const ShortcutsContainer = styled.div``

export const ShortcutsTitle = styled.h6`
  color: ${props => props.theme.titleColor};
  font-family: 'Roboto', sans-serif;
  font-size: 0.6rem;
  margin-bottom: 0.2rem;
  margin-top: -2rem;
  text-transform: uppercase;
`

export const Shortcut = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 0.8rem;
`

export const TooltipCreator = styled.span`
  color: ${props => props.theme.textColor};
  display: block;
`

export const TooltipCreatorOff = styled.span`
  color: ${props => props.theme.titleColor};
`

export const SocialMediaLink = styled.a``
