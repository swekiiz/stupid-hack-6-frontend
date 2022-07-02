import { BlogPost } from '@/../components/feed/BlogPost'
import { Box } from '@mui/material'

export const Feed = () => {
  return (
    <Box>
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
