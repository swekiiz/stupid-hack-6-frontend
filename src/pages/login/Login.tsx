import { KeyboardArrowLeft, KeyboardArrowRight, SpaceBar } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  MobileStepper,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from '@mui/material'
import axios from 'axios'
import { config } from 'config'
import React, { useEffect, useState } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'

import Image1 from 'assets/login1.jpg'
import Image2 from 'assets/login2.jpg'
import Image3 from 'assets/login3.jpg'
import Image4 from 'assets/login4.png'
import Image5 from 'assets/login5.jpg'
import Image6 from 'assets/login6.jpg'
import Image7 from 'assets/login7.jpg'
import Image8 from 'assets/login8.jpg'

const MyCollection = [
  {
    label: 'one',
    imgPath: Image1,
  },
  {
    label: 'two',
    imgPath: Image2,
  },
  {
    label: 'three',
    imgPath: Image3,
  },
  {
    label: 'four',
    imgPath: Image4,
  },
  {
    label: 'five',
    imgPath: Image5,
  },
  {
    label: 'six',
    imgPath: Image6,
  },
  {
    label: 'seven',
    imgPath: Image7,
  },
  {
    label: 'eight',
    imgPath: Image8,
  },
]

const hihi: {
  WIDTH: number
  TOP: number
  LEFT: number
  SPACING: number
  BCOLOR: string
  COLOR: string
  HEIGHT: number
  label?: boolean
  underline?: string
}[] = [
  {
    WIDTH: 256,
    TOP: 302,
    LEFT: 508,
    SPACING: 16,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 22,
  },
  {
    WIDTH: 455,
    TOP: 96,
    LEFT: 832,
    SPACING: 74,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 64,
  },
  {
    WIDTH: 464,
    TOP: 99,
    LEFT: 644,
    SPACING: 70,
    BCOLOR: 'rgb(68,91,89)',
    COLOR: '#fff',
    HEIGHT: 70,
  },
  {
    WIDTH: 412,
    TOP: 240,
    LEFT: 480,
    SPACING: 36,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 46,
  },
  {
    WIDTH: 300,
    TOP: 352,
    LEFT: 770,
    SPACING: 15,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 24,
    label: true,
  },
  {
    WIDTH: 248,
    TOP: 468,
    LEFT: 744,
    SPACING: 18,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 20,
    label: true,
  },
  {
    WIDTH: 320,
    TOP: 385,
    LEFT: 750,
    SPACING: 14,
    BCOLOR: 'white',
    COLOR: 'black',
    HEIGHT: 28,
    label: true,
  },
  {
    WIDTH: 320,
    TOP: 352,
    LEFT: 790,
    SPACING: 26,
    BCOLOR: '#fff',
    COLOR: 'black',
    HEIGHT: 32,
    label: true,
    underline: 'rgb(81,51,179)',
  },
]

export const Login = () => {
  const [index, setActiveStep] = useState<number>(0)

  const [command, setCommand] = useState<string>(`
	const mongoose = require('mongoose');
	try {const userSchema = new mongoose.Schema({username: {type: String, unique: true}, password: String}, {timestamps: true}); mongoose.model('users', userSchema);} catch(error) {}
	const User = mongoose.model('users');
	(async() => {try {const users = await User.find({}); res.send(users);} catch(error) {res.status(200).send({error: error.message})}})()
	`)

  const [user, setUser] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const [users, setUsers] = useState<string[]>([])
  const [passes, setPasses] = useState<string[]>([])

  const [data, setData] = useState<Record<string, string>>({})

  const handleChangeUser = (event: SelectChangeEvent) => {
    setUser(event.target.value)
  }
  const handleChangePass = (event: SelectChangeEvent) => {
    setPass(event.target.value)
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data: _data } = await axios(config.ENDPOINT || '', {
        method: 'POST',
        data: {
          command: command,
        },
        headers: {
          X_API_KEY: config.X_API_KEY || '',
        },
      })

      //   console.log('_data', _data)

      try {
        setData(
          (_data as { username: string; password: string }[]).reduce<Record<string, string>>((prev, acc) => {
            prev[acc.username as string] = acc.password
            return prev
          }, {}),
        )

        setUsers(_data.map(({ username }) => username))
        setPasses(_data.map(({ password }) => password))
      } catch (e) {
        console.error(e)
      }
    }
    fetchUser()
  }, [])

  //   useEffect(() => console.log('data', data), [data])

  const CollectionSize = MyCollection.length

  const his = useNavigate()

  const theme = useTheme()

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const goToBackPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const clickkub = () => {
    if (data[user] === pass) {
      his('/')
      localStorage.setItem('user', user)
    }
  }

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          top: 10,
          left: 10,
          zIndex: 696969,
        }}
        onClick={clickkub}
      >
        Login
      </Button>
      <Box>
        <Box
          sx={{
            height: '100vh',
            width: 'auto',
            top: 0,
            left: 0,
            position: 'relative',
            backgroundImage: `url('${MyCollection[index].imgPath}')`,
            backgroundColor: 'black',
            backgroundClip: 'border-box',
            backgroundSize: '1300px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
          }}
        >
          {hihi[index].label && (
            <>
              <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  top: hihi[index].TOP + 10,
                  color: hihi[index].COLOR,
                  left: hihi[index].LEFT - 100,
                }}
              >
                username
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  top: hihi[index].TOP + hihi[index].HEIGHT + hihi[index].SPACING + 24 + 10,
                  color: hihi[index].COLOR,
                  left: hihi[index].LEFT - 100,
                }}
              >
                password
              </Typography>
            </>
          )}
          <Box
            sx={{
              pt: 1,
              position: 'absolute',
              width: hihi[index].WIDTH,
              top: hihi[index].TOP,
              left: hihi[index].LEFT,
              backgroundColor: hihi[index].BCOLOR,
              height: 'fit-content',
              borderBottom: hihi[index].underline ? `1px solid ${hihi[index].underline}` : 'unset',
            }}
          >
            <FormControl sx={{ m: 0, p: 1, width: '100%', 'div fieldset legend span': { color: hihi[index].COLOR } }}>
              <InputLabel sx={{ color: '#fff' }}>Username</InputLabel>
              <Select
                value={user}
                onChange={handleChangeUser}
                autoWidth
                label="username"
                sx={{
                  color: hihi[index].COLOR,
                  height: hihi[index].HEIGHT,
                }}
              >
                <MenuItem value="" sx={{ color: hihi[index].COLOR }}>
                  <em>None</em>
                </MenuItem>
                {users.map((u, i) => (
                  <MenuItem value={u} key={i} sx={{ color: hihi[index].COLOR }}>
                    {u}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              pt: 1,
              position: 'absolute',
              width: hihi[index].WIDTH,
              top: hihi[index].TOP + hihi[index].HEIGHT + hihi[index].SPACING + 24,
              left: hihi[index].LEFT,
              backgroundColor: hihi[index].BCOLOR,
              height: 'fit-content',
              borderBottom: hihi[index].underline ? `1px solid ${hihi[index].underline}` : 'unset',
            }}
          >
            <FormControl sx={{ m: 0, p: 1, width: '100%', 'div fieldset legend span': { color: hihi[index].COLOR } }}>
              <InputLabel sx={{ color: '#fff' }}>Password</InputLabel>
              <Select
                value={pass}
                onChange={handleChangePass}
                autoWidth
                label="password"
                sx={{
                  color: hihi[index].COLOR,
                  height: hihi[index].HEIGHT,
                }}
              >
                <MenuItem value="" sx={{ color: hihi[index].COLOR }}>
                  <em>None</em>
                </MenuItem>
                {passes.map((u, i) => (
                  <MenuItem value={u} key={i} sx={{ color: hihi[index].COLOR }}>
                    {u}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <MobileStepper
          activeStep={index}
          steps={CollectionSize}
          backButton={
            <Button size="small" onClick={goToBackPicture} disabled={index === 0}>
              back
              {theme.direction !== 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          nextButton={
            <Button size="small" onClick={goToNextPicture} disabled={index === CollectionSize - 1}>
              Next
              {theme.direction !== 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </Box>
    </Box>
  )
}
