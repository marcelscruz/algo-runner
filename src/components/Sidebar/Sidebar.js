/***** React *****/
import React from 'react'

/***** Libraries *****/
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const Sidebar = ({ exercises, setCurrentExercise }) => {
  return (
    <SideNav
      onSelect={selected => {
        setCurrentExercise(exercises[selected - 1])
      }}
      className="sidenav"
    >
      <Toggle />
      <Nav defaultSelected="home" className="nav">
        {exercises.map(exercise => {
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
  )
}

export default Sidebar
