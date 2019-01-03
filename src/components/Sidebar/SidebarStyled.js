import styled from 'styled-components'

const sidenav = `
  .sidenav {
    height: 100%;
    position: relative !important;
    padding-top: 2.5rem;
    bottom: 31.5rem;
    transition: min-width .3s !important;
  }

  .sidenav---sidenav---_2tBP {
    background: none !important;
    overflow: hidden;
  }

  .sidenav---sidenav---_2tBP.sidenav---expanded---1KdUL {
    min-width: 10rem !important;
  }

  // Exercise
  .sidenav---sidenav-nav---3tvij > .sidenav---sidenav-navitem---uwIJ- {
    width: 64px;
    transition: width .3s;
  }

  // Exercise on hover
  .sidenav---sidenav-nav---3tvij > .sidenav---sidenav-navitem---uwIJ-:hover {
    background: #242729;
  }

  // Exercise selected
  .sidenav---sidenav-navitem---uwIJ-.sidenav---selected---1EK3y.sidenav---highlighted---oUx9u {
    background: #242729;
  }

  .sidenav---sidenav-nav---3tvij.sidenav---expanded---1KdUL > .sidenav---sidenav-navitem---uwIJ- {
    width: 10rem;
  }
  
  // Exercise title collapsed
  .sidenav---sidenav-nav---3tvij > .sidenav---sidenav-navitem---uwIJ- > .sidenav---navitem---9uL5T .sidenav---navicon---3gCRo + .sidenav---navtext---1AE_f {
    display: inline-block !important;
    visibility: hidden;
  }
  
  // Exercise title expanded
  .sidenav---sidenav---_2tBP.sidenav---expanded---1KdUL .sidenav---sidenav-nav---3tvij > .sidenav---sidenav-navitem---uwIJ- .sidenav---navicon---3gCRo + .sidenav---navtext---1AE_f {
    visibility: visible;
  }
`

export const SidebarStyled = styled.aside`
  border: 1px solid ${props => props.theme.borderColor};
  border-bottom: none;
  border-top: none;
  background: ${props => props.theme.primary};
  height: 100%;

  ${sidenav}
`
