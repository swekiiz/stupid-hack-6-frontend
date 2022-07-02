import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { AppWrapper } from 'components/AppWrapper'
import { Router } from 'router'

import { theme } from 'themes/main'

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <AppWrapper>
            <Router />
          </AppWrapper>
        </EmotionThemeProvider>
      </MaterialThemeProvider>
    </StyledEngineProvider>
  )
}
