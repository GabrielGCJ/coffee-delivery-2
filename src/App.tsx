import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Routes"

export const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}> 
    <GlobalStyle />
      <BrowserRouter>
        <Router/> 
      </BrowserRouter>
    </ThemeProvider>
  )
}
