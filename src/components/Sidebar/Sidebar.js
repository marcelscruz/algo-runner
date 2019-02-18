/***** React *****/
import React from 'react'
import PropTypes from 'prop-types'

/***** Libraries *****/
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

/***** Styles *****/
import { SidebarStyled } from './SidebarStyled'

const Sidebar = ({ exercisesList, setCurrentExercise, setResult }) => {
  return (
    <SidebarStyled>
      <SideNav
        onSelect={selected => {
          setResult([]) // Fix glitch on result background
          setCurrentExercise(exercisesList[selected - 1])
        }}
        className="sidenav"
      >
        <Toggle />
        <Nav defaultSelected="1" className="nav">
          {exercisesList.map(exercise => {
            return (
              <NavItem eventKey={exercise.id} key={exercise.id}>
                <NavIcon>
                  <span>{exercise.id}</span>
                </NavIcon>
                <NavText>{exercise.name}</NavText>
              </NavItem>
            )
          })}
        </Nav>
      </SideNav>
    </SidebarStyled>
  )
}

export default Sidebar

Sidebar.propTypes = {
  exercisesList: PropTypes.array.isRequired,
  setCurrentExercise: PropTypes.func.isRequired,
}
