import styled from 'styled-components'

export const overlay = {
  background: 'rgba(0, 0, 0, 0.6)',
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

export const Emoji = styled.span.attrs({
  role: 'img',
  ariaLabel: props => props.label,
})`
  font-size: 6rem;
`

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
