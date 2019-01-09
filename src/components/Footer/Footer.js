/***** React *****/
import React from 'react'

/***** Styles *****/
import { FooterStyled, SocialMediaLink } from './FooterStyled'

/***** Libraries *****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'

const Footer = () => (
  <FooterStyled>
    <FontAwesomeIcon
      data-tip="custom show"
      data-event="click"
      // data-offset="{'top': 50, 'left': 0}"
      icon="info-circle"
    />
    <ReactTooltip globalEventOff="click">
      <p>Made by Marcel Cruz</p>
      <p>Shortcuts: cmd + enter = submit</p>
    </ReactTooltip>

    <SocialMediaLink
      href="https://github.com/marcelscruz/algo-runner"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
    </SocialMediaLink>

    <SocialMediaLink
      href="https://twitter.com/marcelcruz"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </SocialMediaLink>
  </FooterStyled>
)

export default Footer
