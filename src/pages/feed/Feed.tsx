import { BlogPost } from '@/../components/feed/BlogPost'
import { Box } from '@mui/material'

import { NeWPoXt } from 'components/feed/NeWPoXt'

export const Feed = () => {
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
