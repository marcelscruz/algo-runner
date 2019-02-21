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
  font-size: 0.9rem;
  font-weight: 600;
  height: 2.5rem;
  margin: 0 1rem;
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
