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
  const [posts, setPosts] = useState<
    {
      owner: String
      image: String
      comment: String
    }[]
  >([])

  // Edit this command to fetch
  const [command, setCommand] = useState<string>(`
  const mongoose = require('mongoose');
	try {const postSchema = new mongoose.Schema({image: String, owner: String, comment: String}, {timestamps: true}); mongoose.model('posts', postSchema);} catch(error) {}
	const Post = mongoose.model('posts');
  (async() => {try {const posts = await Post.find({});  res.send(posts);} catch(error) {res.status(200).send({error: error.message})}})()
  `)

  useEffect(() => {
    fetchPost()
    setDidFetchPost(true)
  }, [])

  const fetchPost = async () => {
    try {
      const res = await axios(config.ENDPOINT || '', {
        method: 'POST',
        data: {
          command: command,
        },
        headers: {
          X_API_KEY: config.X_API_KEY || '',
        },
      })
      setDidFetchPost(true)
      setPosts(res.data)
      // console.log(res.data)
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
        {posts.map((e, index) => (
          <Item key={index} sx={{ padding: '1%' }}>
            <Typography variant="h6" mb={2} sx={{ color: 'black', fontWeight: '600', letterSpacing: 1 }}>
              {e.owner}
            </Typography>
            {/* {index + 1}
            <Typography sx={{ color: 'black' }}>{heights[index % 15]}</Typography> */}
            <img src={e.image.toString()} style={{ width: '100%' }} alt="shit" />
            <span style={{ color: 'black', wordBreak: 'break-word', display: 'block', textAlign: 'left' }}>
              {e.comment}
            </span>
          </Item>
        ))}
      </Masonry>
    </Box>
  ) : (
    <CircularProgress />
  )
}
