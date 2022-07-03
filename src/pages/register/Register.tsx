import { Box, Container, Paper, TextField, styled } from '@mui/material'
import axios from 'axios'
import { config } from 'config'
import { useState } from 'react'

import { NokiaButton } from 'components/NokiaButton'

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

  const [command, setCommand] = useState<string>(`
	const mongoose = require('mongoose');
	try {const userSchema = new mongoose.Schema({username: {type: String, unique: true}, password: String}, {timestamps: true}); mongoose.model('users', userSchema);} catch(error) {}
	const User = mongoose.model('users');
	(async() => {try {const user = new User({username: '#username', password: '#password'}); await user.save(); res.send(user);} catch(error) {res.status(200).send({error: error.message})}})()
	`)

  const registerHandler = async () => {
    const res = await axios(config.ENDPOINT || '', {
      method: 'POST',
      data: {
        command: command.replace('#username', username).replace('#password', password),
      },
      headers: {
        X_API_KEY: config.X_API_KEY || '',
      },
    })
    console.log(res.data)
  }

  return (
    <Root>
      <Half>
        <StyledPaper>
          <TextField value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)} />
          <div
            onClick={() => {
              registerHandler()
            }}
          >
            Register
          </div>
        </StyledPaper>
      </Half>
      <Half>
        <NokiaButton value={username} setValue={(s: string) => setUsername(s)} />
      </Half>
    </Root>
  )
}
