import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { Router } from 'router'

import { theme } from 'themes/main'

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </EmotionThemeProvider>
      </MaterialThemeProvider>
    </StyledEngineProvider>
  )
}
