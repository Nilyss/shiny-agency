import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context'

//${({ props }) => (props.isDarkMode ? '#2F2E41' : '#FFFFFF')};


const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  
  body {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? '#2F2E41' : '#FFFFFF'};
    margin: 0
  }
`

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
