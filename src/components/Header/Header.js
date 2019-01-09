/***** React *****/
import React from 'react'

/***** Styles *****/
import { HeaderStyled, Title, TitleSub } from './HeaderStyled'

const Header = () => (
  <HeaderStyled>
    <Title>
      A<TitleSub>lgo</TitleSub> R<TitleSub>unner</TitleSub>
    </Title>
  </HeaderStyled>
)

export default Header
