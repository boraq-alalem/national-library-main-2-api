import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { alpha } from '@mui/material';

// Create RTL cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Colors
const colors = {
  primary: {
    main: '#0969DA', // GitHub blue
    light: '#2188FF',
    dark: '#044289',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#6E40C9', // Purple
    light: '#8957E5',
    dark: '#5A32A3',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#2DA44E', // GitHub green
    light: '#3FB950',
    dark: '#1A7F37',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#D29922', // GitHub yellow
    light: '#E3B341',
    dark: '#9E6A03',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#CF222E', // GitHub red
    light: '#F85149',
    dark: '#A40E26',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#0969DA', // GitHub blue
    light: '#54AEFF',
    dark: '#0550AE',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#F6F8FA', // GitHub light gray
    100: '#EAEEF2',
    200: '#D0D7DE',
    300: '#AFB8C1',
    400: '#8C959F',
    500: '#6E7781',
    600: '#57606A',
    700: '#424A53',
    800: '#32383F',
    900: '#24292F',
  },
};

// Common theme settings
const commonSettings = {
  direction: 'rtl',
  typography: {
    fontFamily: '"Tajawal", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 6,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
};

// Light theme
const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    grey: colors.grey,
    background: {
      default: '#F6F8FA', // GitHub background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#24292F',
      secondary: '#57606A',
      disabled: '#8C959F',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  // Custom theme extensions
  customShadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    dropdown: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    dialog: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  customGradients: {
    primary: 'linear-gradient(to right, #0969DA, #2188FF)',
    secondary: 'linear-gradient(to right, #6E40C9, #8957E5)',
    info: 'linear-gradient(to right, #54AEFF, #0969DA)',
    success: 'linear-gradient(to right, #2DA44E, #3FB950)',
    warning: 'linear-gradient(to right, #D29922, #E3B341)',
    error: 'linear-gradient(to right, #CF222E, #F85149)',
  },
  customStyles: {
    // Title with gradient
    gradientTitle: {
      color: '#0969DA',
      backgroundImage: 'linear-gradient(to right, #0969DA, #2188FF)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    },
    // Subtitle style
    subtitle: {
      color: '#57606A',
      fontWeight: 500,
      fontSize: '1rem',
      display: 'block',
      marginBottom: '8px',
    },
    // Card styles
    card: {
      borderRadius: 8,
      transition: 'all 0.3s ease',
      backgroundColor: '#FFFFFF',
      border: '1px solid #D0D7DE',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-2px)',
      },
    },
    // Glass card style (iOS-like)
    glassCard: {
      borderRadius: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    },
    // Button styles
    button: {
      primary: {
        borderRadius: 6,
        fontWeight: 600,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        },
      },
      secondary: {
        borderRadius: 6,
        fontWeight: 600,
        border: '1px solid #D0D7DE',
        backgroundColor: '#F6F8FA',
        color: '#24292F',
        '&:hover': {
          backgroundColor: '#EAEEF2',
          borderColor: '#AFB8C1',
        },
      },
    },
    // Grid background
    gridBackground: {
      backgroundImage: 'linear-gradient(#D0D7DE 1px, transparent 1px), linear-gradient(to right, #D0D7DE 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundColor: '#F6F8FA',
      opacity: 0.3,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
          padding: '6px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          },
        },
        contained: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #D0D7DE',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #D0D7DE',
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #D0D7DE',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover': {
            backgroundColor: '#F6F8FA',
          },
          '&.Mui-selected': {
            backgroundColor: '#F6F8FA',
            '&:hover': {
              backgroundColor: '#EAEEF2',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 6,
          },
        },
      },
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#58A6FF', // GitHub dark mode blue
      light: '#79B8FF',
      dark: '#1F6FEB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#BC8CFF', // Purple
      light: '#D2A8FF',
      dark: '#8957E5',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#3FB950', // GitHub dark mode green
      light: '#56D364',
      dark: '#2EA043',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#E3B341', // GitHub dark mode yellow
      light: '#F2CC60',
      dark: '#D29922',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F85149', // GitHub dark mode red
      light: '#FF7B72',
      dark: '#DA3633',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#58A6FF', // GitHub dark mode blue
      light: '#79B8FF',
      dark: '#1F6FEB',
      contrastText: '#FFFFFF',
    },
    grey: {
      50: '#161B22',
      100: '#21262D',
      200: '#30363D',
      300: '#484F58',
      400: '#6E7681',
      500: '#8B949E',
      600: '#B1BAC4',
      700: '#C9D1D9',
      800: '#E6EDF3',
      900: '#F0F6FC',
    },
    background: {
      default: '#0D1117', // GitHub dark mode background
      paper: '#161B22',
    },
    text: {
      primary: '#C9D1D9',
      secondary: '#8B949E',
      disabled: '#6E7681',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  // Custom theme extensions
  customShadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
    dropdown: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
    dialog: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
    button: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  },
  customGradients: {
    primary: 'linear-gradient(to right, #1F6FEB, #58A6FF)',
    secondary: 'linear-gradient(to right, #8957E5, #BC8CFF)',
    info: 'linear-gradient(to right, #79B8FF, #58A6FF)',
    success: 'linear-gradient(to right, #2EA043, #3FB950)',
    warning: 'linear-gradient(to right, #D29922, #E3B341)',
    error: 'linear-gradient(to right, #DA3633, #F85149)',
  },
  customStyles: {
    // Title with gradient
    gradientTitle: {
      color: '#58A6FF',
      backgroundImage: 'linear-gradient(to right, #1F6FEB, #58A6FF)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    },
    // Subtitle style
    subtitle: {
      color: '#8B949E',
      fontWeight: 500,
      fontSize: '1rem',
      display: 'block',
      marginBottom: '8px',
    },
    // Card styles
    card: {
      borderRadius: 8,
      transition: 'all 0.3s ease',
      backgroundColor: '#161B22',
      border: '1px solid #30363D',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
      '&:hover': {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)',
        transform: 'translateY(-2px)',
      },
    },
    // Glass card style (iOS-like)
    glassCard: {
      borderRadius: 12,
      backgroundColor: 'rgba(22, 27, 34, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(48, 54, 61, 0.5)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    },
    // Button styles
    button: {
      primary: {
        borderRadius: 6,
        fontWeight: 600,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
        },
      },
      secondary: {
        borderRadius: 6,
        fontWeight: 600,
        border: '1px solid #30363D',
        backgroundColor: '#21262D',
        color: '#C9D1D9',
        '&:hover': {
          backgroundColor: '#30363D',
          borderColor: '#484F58',
        },
      },
    },
    // Grid background
    gridBackground: {
      backgroundImage: 'linear-gradient(#30363D 1px, transparent 1px), linear-gradient(to right, #30363D 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundColor: '#0D1117',
      opacity: 0.2,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
          padding: '6px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
          },
        },
        contained: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #30363D',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(22, 27, 34, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #30363D',
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #30363D',
          backgroundColor: '#161B22',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover': {
            backgroundColor: '#21262D',
          },
          '&.Mui-selected': {
            backgroundColor: '#21262D',
            '&:hover': {
              backgroundColor: '#30363D',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 6,
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };