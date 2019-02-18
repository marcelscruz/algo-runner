import styled from 'styled-components'

export const overlay = {
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: '10000',
}

export const content = {
  background: '#ddd',
  borderRadius: '2px',
  height: '30rem',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50rem',
}

export const ModalStyled = styled.div`
  align-items: center;
  color: #1c1f21;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 0rem 5rem;
  display: flex;
  width: 100%;
`

export const Header = styled.div`
  /* background: blue; */
  height: 3rem;
  width: 100%;
`

export const Content = styled.div``

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bolder;
`

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  font-weight: normal;
`

export const CTA = styled.div``

export const Button = styled.button`
  background: ${props => props.color};
  color: ${props => props.theme.textColor};
  border: none;
  height: 2.5rem;
  margin: 0 0.5rem;
  width: 8rem;
`
