/***** React *****/
import React, { useState } from 'react'

/***** Styles *****/
import {
  FooterStyled,
  SocialMediaLink,
  TooltipTitle,
  TooltipTitleSub,
  ShortcutsContainer,
  ShortcutsTitle,
  Shortcut,
  TooltipCreator,
  TooltipCreatorOff,
} from './FooterStyled'

/***** Libraries *****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'rc-tooltip/assets/bootstrap_white.css'
import Tooltip from 'rc-tooltip'

const TooltipText = (
  <>
    <TooltipTitle>
      A<TooltipTitleSub>lgo</TooltipTitleSub> R
      <TooltipTitleSub>unner</TooltipTitleSub>
    </TooltipTitle>
    <ShortcutsContainer>
      <ShortcutsTitle>Shortcuts</ShortcutsTitle>
      <Shortcut>Submit: CMD + Enter or CTRL + Enter</Shortcut>
    </ShortcutsContainer>
    <TooltipCreator>
      <TooltipCreatorOff>Created by</TooltipCreatorOff> Marcel Cruz
    </TooltipCreator>
  </>
)

const Footer = () => {
  const [isTooltipActive, setIsTooltipActive] = useState(false)

  const toggleTooltip = () => {
    setIsTooltipActive(!isTooltipActive)
  }

  return (
    <FooterStyled>
      <Tooltip
        align={{ offset: [47, -10] }}
        arrowContent={<div className="rc-tooltip-arrow-inner" />}
        onVisibleChange={toggleTooltip}
        overlay={TooltipText}
        overlayClassName="tooltip"
        placement="topRight"
        trigger="click"
      >
        <FontAwesomeIcon
          icon="info-circle"
          className={`${isTooltipActive ? 'active' : ''}`}
          title="Info"
        />
      </Tooltip>

      <SocialMediaLink
        href="https://github.com/marcelscruz/algo-runner"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'github']} title="GitHub" />
      </SocialMediaLink>

      <SocialMediaLink
        href="https://twitter.com/marcelcruz"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} title="Twitter" />
      </SocialMediaLink>
    </FooterStyled>
  )
}

export default Footer
