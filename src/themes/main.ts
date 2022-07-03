import { createTheme } from '@mui/material/styles'

/**
 * The theme from style guide
 */
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#575D62',
      main: '#23292F',
      dark: '#161924',
      contrastText: '#8E9296',
    },
    secondary: {
      light: '#E8E9EA',
      main: '#3A58ED',
      dark: '#FA5151',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#8E9296',
      secondary: '#ffffff',
    },
    success: {
      main: '#27C096',
    },
    error: {
      main: '#FA5151',
    },
  },
  typography: {
    fontFamily: `Karla, sans-serif`,
    h1: { fontSize: '2.986rem', fontWeight: 'normal' },
    h2: { fontSize: '2.488rem', fontWeight: 'normal' },
    h3: { fontSize: 36, fontWeight: 600 },
    h4: { fontSize: 32, fontWeight: 'bold' },
    h5: { fontSize: 24, fontWeight: 'bold' },
    h6: { fontSize: 18, fontWeight: 'normal' },
    subtitle1: { fontSize: '1.44rem', fontWeight: 'lighter' },
    subtitle2: { fontSize: '1.2rem', fontWeight: 'lighter' },
    body1: { fontSize: '1rem', fontWeight: 'normal' },
    body2: { fontSize: '0.833rem', fontWeight: 'normal' },
  },
  shadows: [
    'none',
    '4px 4px 4px 0 rgba(0,0,0,0.2), -4px -4px 4px 0 rgba(255,255,255,0.04)',
    'inset 4px 4px 4px 0 rgba(0,0,0,0.2), inset -4px -4px 4px 0 rgba(255,255,255,0.04)',
    '8px 8px 8px 0 rgba(0,0,0,0.2), -8px -8px 8px 0 rgba(255,255,255,0.04)',
    'inset 8px 8px 8px 0 rgba(0,0,0,0.2), inset -8px -8px 8px 0 rgba(255,255,255,0.04)',
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)',
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)',
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)',
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)',
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)',
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)',
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)',
    '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)',
    '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)',
    '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)',
    '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)',
    '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)',
    '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)',
    '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)',
    '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)',
    '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)',
  ],
  shape: {
    borderRadius: 4,
  },
})

theme.components = {
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: '0.833rem !important',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        backgroundColor: '#1E262D',
        borderRadius: 500,
        minWidth: 96,
        boxShadow: theme.shadows[1],
        fontWeight: 'bold',
        color: theme.palette.secondary.light,
        border: 'solid 1px transparent',
        fontSize: 16,
        '&:hover, &:focus': {
          boxShadow: theme.shadows[2],
          backgroundColor: '#1e262d',
        },
        '&.Mui-disabled': {
          color: 'rgba(255, 255, 255, 0.5)',
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          boxShadow: 'none',
        },
      },
      outlined: {
        borderRadius: 500,
        color: theme.palette.secondary.main,
        minWidth: 103,
        boxShadow: theme.shadows[1],
        fontWeight: 'bold',
        fontSize: 16,
        border: `solid 1px ${theme.palette.secondary.main}`,
        '&:hover, &:focus': {
          boxShadow: theme.shadows[2],
          backgroundColor: '#1e262d',
        },
        '&.Mui-disabled': {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      disabled: {
        border: 'solid 1px transparent !important',
      },
      text: { textTransform: 'none' },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        // backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent !important',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        overflow: 'visible',
        overflowY: 'visible',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        marginBottom: 24,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        paddingBottom: '16px !important',
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      bar1Determinate: {
        backgroundColor: theme.palette.success.main,
      },
      determinate: {
        backgroundColor: theme.palette.error.main,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#1E262D',
        boxShadow: 'inset 4px 4px 4px 0 rgba(0,0,0,0.2), inset -4px -4px 4px 0 rgba(255,255,255,0.04)',
        color: theme.palette.text.secondary,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        '& fieldset': { borderColor: 'transparent !important' },
      },
      input: {
        padding: '12px 16px',
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      valueLabel: {
        top: 22,
        '& *': {
          background: 'transparent',
          color: '#ffffff',
          fontSize: 16,
        },
      },
      markLabel: {
        color: '#ffffff',
      },
      markLabelActive: {
        color: '#ffffff',
      },
      thumb: {
        width: 2,
        borderRadius: 'none',
        marginLeft: 0,
      },
      thumbColorSecondary: {
        boxShadow: 'none',
      },
    },
  },
}

export { theme }
