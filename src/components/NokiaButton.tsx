import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,100px)',
  gridTemplateRows: 'repeat(4,100px)',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
}))

const GridItem = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '100%',
}))

const StyledButton = styled(Button)(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: 0,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

const Text = styled(Typography)(() => ({
  userSelect: 'none',
}))

const Alphabet = styled('span')(() => ({
  margin: '0 1px',
}))

const buttons = [
  ['1'],
  ['2', 'a', 'b', 'c'],
  ['3', 'd', 'e', 'f'],
  ['4', 'g', 'h', 'i'],
  ['5', 'j', 'k', 'l'],
  ['6', 'm', 'n', 'o'],
  ['7', 'p', 'q', 'r', 's'],
  ['8', 't', 'u', 'v'],
  ['9', 'w', 'x', 'y', 'z'],
  ['*'],
  ['0'],
  ['#'],
]

type NokiaButton = {
  value: string
  setValue: (s: string) => void
}

export const NokiaButton = ({ setValue, value }: NokiaButton) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  useEffect(() => {
    if (currentIndex === -1) {
      return
    }

    const resetTimeout = setTimeout(() => {
      setCurrentIndex(-1)
    }, 1000)

    return () => clearTimeout(resetTimeout)
  }, [currentIndex])

  const handleClick = (alphabets: string[]) => {
    if (currentIndex === -1 || !alphabets.includes(value[value.length - 1])) {
      setValue(value + alphabets[0])
    } else {
      setValue(value.slice(0, -1) + alphabets[currentIndex])
    }

    if (alphabets.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % alphabets.length)
    }
  }

  return (
    <GridContainer onClick={(e) => e.stopPropagation()}>
      {buttons.map((alphabets) => (
        <GridItem key={alphabets[0]}>
          <StyledButton
            onClick={(e) => {
              e.stopPropagation()
              handleClick(alphabets)
            }}
          >
            <Text variant="h4">{alphabets[0]}</Text>
            <Text variant="body1">
              {alphabets.slice(1).map((a) => (
                <Alphabet key={a}>{a}</Alphabet>
              ))}
            </Text>
          </StyledButton>
        </GridItem>
      ))}
    </GridContainer>
  )
}
