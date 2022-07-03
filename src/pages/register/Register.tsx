import { Box, Button, Container, Divider, Paper, Stack, Typography, styled } from '@mui/material'
import axios from 'axios'
import { config } from 'config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const BorBox = styled(Box)(({ theme }) => ({
  border: '1px solid red',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
}))

export const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [s, ss] = useState<number>(-1)

  const go = useNavigate()

  const [command, setCommand] = useState<string>(`
	const mongoose = require('mongoose');
	try {const userSchema = new mongoose.Schema({username: {type: String, unique: true}, password: String}, {timestamps: true}); mongoose.model('users', userSchema);} catch(error) {}
	const User = mongoose.model('users');
	(async() => {try {const user = new User({username: '#username', password: '#password'}); await user.save(); res.send(user);} catch(error) {res.status(200).send({error: error.message})}})()
	`)

  const registerHandler = async () => {
    const { data } = await axios(config.ENDPOINT || '', {
      method: 'POST',
      data: {
        command: command.replace('#username', username).replace('#password', password),
      },
      headers: {
        X_API_KEY: config.X_API_KEY || '',
      },
    })

    if (!!data.username && !!data.password) {
      alert('สมัครเสร็จเเล้วจ้า')
      go('/login')
    } else {
      alert('มีคนใช้ username ไปแล้ว')
    }
  }

  return (
    <Root onClick={() => ss(-1)}>
      <Half>
        <StyledPaper>
          <Box
            sx={{ border: s === 0 ? '1px solid #27384a' : 'unset', p: 1, cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation()
              ss(0)
            }}
          >
            <Typography sx={{ minWidth: 400 }} variant="h5">
              username: {username}
            </Typography>
          </Box>
          <Box
            sx={{ border: s === 1 ? '1px solid #27384a' : 'unset', p: 1, cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation()
              ss(1)
            }}
          >
            <Typography sx={{ minWidth: 400 }} variant="h5">
              password: {password}
            </Typography>
          </Box>
          <Divider />
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation()
              ss(-1)
              registerHandler()
            }}
          >
            Register
          </Button>
        </StyledPaper>
      </Half>
      <Half>
        <NokiaButton
          value={s === 0 ? username : s === 1 ? password : ''}
          setValue={(st: string) => {
            if (s === 0) setUsername(st)
            else if (s === 1) setPassword(st)
          }}
        />
      </Half>
      <Box sx={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography variant="h6">If you want to delete, press F5</Typography>
      </Box>
    </Root>
  )
}
