import { Box, Container, Paper, TextField, styled } from '@mui/material'
import { NokiaButton } from 'components/NokiaButton'
import { useState } from 'react'

const Root = styled(Container)(() => ({
  display: 'flex',
  height: '100vh',
}))

const Half = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  borderRadius: 8,
}))

export const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Root>
      <Half>
        <StyledPaper>
          <TextField value={username} onChange={(e) => setUsername(e.target.value)}  />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)}  />
        </StyledPaper>
      </Half>
      <Half>
        <NokiaButton value={username} setValue={(s: string) => setUsername(s)} />
      </Half>
    </Root>
  )
}
