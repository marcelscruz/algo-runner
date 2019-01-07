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

export const Header = styled.div`
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

export const Footer = styled.div`
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
