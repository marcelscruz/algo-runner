/***** React *****/
import React from 'react'

import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'

/***** Styles *****/
// import { SidebarStyled, MetisMenuStyled } from './SidebarStyled'

/***** API *****/
import get from '../../api/get'

const Sidebar = ({ isSidebarOpen, content }) => {
  return (
    <SideNav
      onSelect={selected => {
        // Add your code here
      }}
    >
      <Toggle />
      <Nav defaultSelected="home">
        {content.map(exercise => {
          return (
            <NavItem eventKey={exercise.name} key={exercise.id}>
              <NavIcon>
                <span>{exercise.id}</span>
              </NavIcon>
              <NavText>{exercise.name}</NavText>
            </NavItem>
          )
        })}
      </Nav>
    </SideNav>
  )
}

export default Sidebar
