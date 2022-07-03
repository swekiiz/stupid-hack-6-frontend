import { CardMedia } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { Box, Grid, Typography } from '@mui/material'
import MuiImageSlider from 'mui-image-slider'
import React from 'react'

import Image1 from '../../assets/login1.jpg'
import Image2 from '../../assets/login2.jpg'
import Image3 from '../../assets/login3.jpg'
import Image4 from '../../assets/login4.png'
import Image5 from '../../assets/login5.jpg'
import Image6 from '../../assets/login6.jpg'
import Image7 from '../../assets/login7.jpg'
import Image8 from '../../assets/login8.jpg'
import Image9 from '../../assets/login9.jpg'
import Image10 from '../../assets/login10.jpg'
import Image11 from '../../assets/login11.jpg'

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
  {
    label: 'nine',
    imgPath: Image9,
  },
  {
    label: 'ten',
    imgPath: Image10,
  },
  {
    label: 'eleven',
    imgPath: Image11,
  },
]

const changeImage = () => {}

export const Login = () => {
  const CollectionSize = MyCollection.length
  const theme = useTheme()
  const [index, setActiveStep] = React.useState(0)

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const goToBackPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div style={{}}>
      <div>
        {/* <Paper
          square
          elevation={0}
          style={{
            display: 'flex',
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            alignItems: 'center',
            backgroundImage: `url(${MyCollection[index].imgPath})`,
          }}
        ></Paper> */}
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: '100vh',
            // width: '100vh',
            // display: 'block',
            position: 'fixed',
          }}
          alt={MyCollection[index].label}
        />
        <MobileStepper
          //position="static"
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
      </div>
    </div>
  )
  // <Grid>
  //   <MuiImageSlider images={images} />
  //   <Box
  //     className="Image"
  //     style={{
  //       backgroundImage: `url(${Image})`,
  //       backgroundSize: 'cover',
  //       height: '100vh',
  //     }}
  //   ></Box>

  //   <CardMedia
  //     onClick={() => {
  //       changeImage
  //     }}
  //     className="Arrow"
  //     component={'img'}
  //     src={Arrow}
  //     style={{
  //       height: 100,
  //       width: 100,
  //     }}
  //   ></CardMedia>
  // </Grid>
  //)
}
