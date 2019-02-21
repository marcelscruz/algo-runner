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

/***** Components *****/
import { SidebarStyled } from './SidebarStyled'

const Sidebar = ({
  exercisesList,
  setCurrentExercise,
  currentExerciseIndex,
  setCurrentExerciseIndex,
  setResults,
}) => {
  return (
    <SidebarStyled>
      <SideNav
        onSelect={selected => {
          setResults([]) // Fix glitch on result background
          setCurrentExercise(exercisesList[selected - 1])
          setCurrentExerciseIndex(selected - 1)
        }}
        className="sidenav"
      >
        <Toggle />
        <Nav className="nav">
          {exercisesList.map((exercise, index) => {
            return (
              <NavItem
                eventKey={exercise.id}
                key={exercise.id}
                active={currentExerciseIndex === index}
              >
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
  currentExerciseIndex: PropTypes.number.isRequired,
  setCurrentExercise: PropTypes.func.isRequired,
  setCurrentExerciseIndex: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
}
