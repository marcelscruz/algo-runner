/***** React *****/
import React, { useState } from 'react'
// import MetisMenu from 'react-metismenu'

/***** Styles *****/
import { SidebarStyled, MetisMenuStyled } from './SidebarStyled'

const Sidebar = ({ isSidebarOpen }) => {
  const content = [
    {
      icon: 'icon-class-name',
      label: 'Label of Item',
      to: '#a-link',
    },
    {
      icon: 'icon-class-name',
      label: 'Second Item',
      content: [
        {
          icon: 'icon-class-name',
          label: 'Sub Menu of Second Item',
          to: '#another-link',
        },
      ],
    },
  ]

  return (
    <SidebarStyled isSidebarOpen={isSidebarOpen}>
      <MetisMenuStyled content={content} />
    </SidebarStyled>
  )
}

export default Sidebar
