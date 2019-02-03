/***** Libraries *****/
import { createGlobalStyle } from 'styled-components'

/***** Styles *****/
import tooltip from './assets/tooltip'

/***** Fonts *****/
import fonts from './fonts'

/***** Font Awesome *****/
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faQuestion,
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faQuestion, faCheck, faTimes, faInfoCircle, faGithub, faTwitter)

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400|Open+Sans|Raleway:600,700,800|');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.primary};
    box-sizing: border-box;
    color: ${props => props.theme.textColor};
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: ${fonts.primary}, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${tooltip}
  
`
