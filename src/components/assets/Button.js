import styled from 'styled-components'
import fonts from '../../styles/fonts'

export default styled.button`
  background: ${props => props.color};
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.textColor};
  cursor: pointer;
  /* 
TODO: try terciary font here
 */
  font-family: ${fonts.secondary}, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  height: 2.5rem;
  line-height: 0.6;
  margin: 0 1rem;
  position: relative;
  transition: all 0.3s;
  width: 8rem;

  &:hover {
    box-shadow: 0 6px 5px rgba(0, 0, 0, 0.1);
    transform: translate(0, -0.05rem) scale(1.02);
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    transform: translate(0, -0.02rem) scale(1.01);
  }
`

export const ButtonShortcut = styled.span`
  /* bottom: 0.2rem; */
  font-size: 0.6rem;
  font-weight: 400;
  /* left: 50%; */
  position: relative;
  top: 0.3rem;
  /* transform: translateX(-50%); */
`
