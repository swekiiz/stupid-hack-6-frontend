import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { BlogPost } from 'components/feed/BlogPost'
import { NeWPoXt } from 'components/feed/NeWPoXt'

export const Feed = () => {
  if (!localStorage.getItem('user')) {
    return <Navigate to={'/login'} />
  }

  return (
    <Box>
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
