import { Box, Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'

import { BlogPost } from 'components/feed/BlogPost'
import { NeWPoXt } from 'components/feed/NeWPoXt'

export const Feed = () => {
  const go = useNavigate()

  if (!localStorage.getItem('user')) {
    return <Navigate to={'/login'} />
  }

  return (
    <Box>
      <Box sx={{ position: 'fixed', right: 100, top: 16, zIndex: 696969 }}>
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.removeItem('user')
            go('/login')
          }}
        >
          Log out
        </Button>
      </Box>
      <NeWPoXt />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          margin: '3vh 3vw',
        }}
      >
        <BlogPost />
      </Box>
    </Box>
  )
}
