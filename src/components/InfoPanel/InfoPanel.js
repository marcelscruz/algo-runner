/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Styles *****/
import { InfoPanelContainer } from './InfoPanelStyled'

const InfoPanel = ({ result, evaluate }) => {
  return (
    <InfoPanelContainer>
      <p>{result}</p>
      <button onClick={evaluate}>Submit</button>
    </InfoPanelContainer>
  )
}

export default InfoPanel

InfoPanel.propTypes = {
  result: PropTypes.string.isRequired,
  evaluate: PropTypes.func.isRequired,
}
