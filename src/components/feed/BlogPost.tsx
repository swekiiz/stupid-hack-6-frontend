import Masonry from '@mui/lab/Masonry'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TempImage from 'assets/TempImg'
import axios from 'axios'
import { config } from 'config'
import { useEffect, useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f0f0f0',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export const BlogPost: React.FC = () => {
  const [didFetchPost, setDidFetchPost] = useState(false)

  // Edit this command to fetch
  const [command, setCommand] = useState<string>("console.log('test')")
  // useState<string>(`
  // const mongoose = require('mongoose');
  // try {const userSchema = new mongoose.Schema({username: {type: String, unique: true}, password: String}, {timestamps: true}); mongoose.model('users', userSchema);} catch(error) {}
  // const User = mongoose.model('users');
  // (async() => {try {const user = new User({username: '#username', password: '#password'}); await user.save(); res.send(user);} catch(error) {res.status(200).send({error: error.message})}})()
  // `)

  useEffect(() => {
    fetchPost()
    setDidFetchPost(true)
  }, [])

  const fetchPost = async () => {
    try {
      const res = await axios(config.ENDPOINT || '', {
        method: 'GET',
        data: {
          command: command,
        },
        headers: {
          X_API_KEY: config.X_API_KEY || '',
        },
      })
      setDidFetchPost(true)
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  return didFetchPost ? (
    <Box
      sx={{
        width: '90vw',
        autominHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Masonry columns={3} spacing={7}>
        {TempImage.map((image, index) => (
          <Item key={index} sx={{ padding: '1%' }}>
            <Typography variant="h6" mb={2} sx={{ color: 'black', fontWeight: '600', letterSpacing: 1 }}>
              {image.username}
            </Typography>
            {/* {index + 1}
            <Typography sx={{ color: 'black' }}>{heights[index % 15]}</Typography> */}
            <img src={image.img} style={{ width: '100%' }} />

            <span style={{ color: 'black', wordBreak: 'break-word', display: 'block', textAlign: 'left' }}>
              {image.description}
            </span>
          </Item>
        ))}
      </Masonry>
    </Box>
  ) : (
    <CircularProgress />
  )
}
