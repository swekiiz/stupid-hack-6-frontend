import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

const Screen = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
}))

type AppWrapper = {
  children?: ReactNode
}

export const AppWrapper = ({ children }: AppWrapper) => <Screen>{children}</Screen>
