import Masonry from '@mui/lab/Masonry'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import * as React from 'react'

const heights = [270, 150, 210, 190, 230, 270, 250, 200, 170, 210, 220, 270, 150, 170, 200]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e0e0e0',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export const BlogPost = () => {
  return (
    <Box
      sx={{
        width: '90vw',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Masonry columns={3} spacing={7}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
            <Typography sx={{ color: 'black' }}>{height}</Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  )
}
