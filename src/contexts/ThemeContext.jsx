import { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { BluetoothConnectedRounded, BorderBottom, BorderColor, BorderTop, Filter } from '@mui/icons-material';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

export const ThemeContextProvider = ({ children }) => {
  // عند التحميل، جلب الوضع من localStorage أو الافتراضي light
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('themeMode') || 'light';
    }
    return 'light';
  });

  // حفظ الوضع في localStorage عند تغييره
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', mode);
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );


  const lightThemeOptions = {
    palette: {
      mode: 'light',
      bg1:{
        main: "#f5f7fa"
      },
      bg2:{
        main:"#f7fafc",
        main:"#dddddd",
        main:"#eff1f3",
      },
      bg3:{
        main:"#3fadda",
        sec:'#3080a1',
      },
      primary: {
        main: '#1a3a6e',
        main: '#7925d2',
        main: '#3fadda',
        light: '#2c4899',
        dark: '#111111',
      },
      secondary: {
        main: '#b89535',
        light: '#d1b266',
        dark: '#8d7020',
      },
      success: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
      },
      warning: {
        main: '#ff9800',
        light: '#ffb74d',
        dark: '#f57c00',
      },
      error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
      },
      background: {
        default: '#f5f7fa',
        paper: '#ffffff',
      },
      background2: {
        background: 'linear-gradient(var(45), oklab(97.5% -0.006 -0.011), oklab(97.8% -0.031 -0.009), oklab(95.8% -0.06 -0.017), oklab(94.1% -0.087 -0.024), oklab(92.8% -0.109 -0.03))',
        main: '#7f6724'
      },
      line:{
        main:"#1a3a6e",
      },
    },
    supTitle: {
      color: '#3fadda',
      backgroundImage: 'radial-gradient(circle, #1a3a6e, #3fadda 50%, #4796ec 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      bg: 'transparent',
    },
    title: {
      color: '#4828ce',
      backgroundImage: 'radial-gradient(circle, #4828ce, #3fadda 80%, #4796ec 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      bg: 'transparent',
    },
    // supTitle: {
    //   color: '#1a3a6e',
    //   backgroundImage: 'radial-gradient(circle, #1a3a6e, #9f1efa 50%, #4796ec 100%)',
    //   backgroundClip: 'text',
    //   WebkitBackgroundClip: 'text',
    //   WebkitTextFillColor: 'transparent',
    //   bg: 'transparent',
    // },
    // title: {
    //   color: '#4828ce',
    //   backgroundImage: 'radial-gradient(circle, #4828ce, #9f1efa 50%, #4796ec 100%)',
    //   backgroundClip: 'text',
    //   WebkitBackgroundClip: 'text',
    //   WebkitTextFillColor: 'transparent',
    //   bg: 'transparent',
    // },
    subTitle: {
      color: '#1a3a6e',
      fontWeight: 600,
      fontSize: '1rem',
      display: 'block',
      mb: 1,
    },
    bgGrid1:{
      backgroundImage:' linear-gradient(#dddddd00 3px, transparent 2px), linear-gradient(to right, #dddddd40 3px, transparent 2px)',
      backgroundSize: '10px 10px',
      backgroundColor:' #f5f7fa',
    },
    bgGrid2:{
      backgroundImage:' linear-gradient(#dddddd40 2px, transparent 2px), linear-gradient(to right, #dddddd40 2px, transparent 2px)',
      backgroundImage: 'linear-gradient(rgba(208, 215, 222, 0.03) 1px, transparent 1px), linear-gradient(to right, rgba(208, 215, 222, 0.3) 1px, transparent 1px)',
      
      backgroundSize: '10px 10px',
      backgroundColor:' #f7fafc',
    },
    bgGrid3:{
      backgroundImage:'radial-gradient(#d0d7de 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      borderTop: '3px solid',
      borderBottom: '3px solid',


    },
    card1: {
      borderRadius: 8,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(0, 0, 0, 0.07)',
      boxShadow: '0 8px 32px 0 rgba(26, 58, 110, 0.15)',
    },
    card2: {
      borderRadius: 5,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 8px 32px 0 rgba(26, 58, 110, 0.15)',
    },
    btn1:{
      borderRadius:2,
      color: '#ffffff',
      fontSize:'1.0rem',
      padding:'8px 15px',

    },
    btn1Hover:{
      background:'#1d4477',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            border: '1px solid rgba(0, 0, 0, 0.12)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            backgroundColor: '#ffffff',
          },
        },
      },
    },
  };

  const darkThemeOptions = {
    palette: {
      mode: 'dark',
      bg1:{
        main: "#121212"
      },
      bg2:{
        // main:"#212121",
        main:"#161616"
      },
      bg3:{
        main:"#1e5b75",
        sec:'#0f3646',
      },
      primary: {
        main: '#1a3a6e',
        main: '#d8cddf',
        light: '#2c4899',
        dark: '#111111',
      },
      secondary: {
        main: '#ffffff',
        light: '#d1b266',
        dark: '#8d7020',
      },
      success: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
      },
      warning: {
        main: '#ff9800',
        light: '#ffb74d',
        dark: '#f57c00',
      },
      error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      background2: {
        background: 'linear-gradient(var(45), oklab(97.5% -0.006 -0.011), oklab(97.8% -0.031 -0.009), oklab(95.8% -0.06 -0.017), oklab(94.1% -0.087 -0.024), oklab(92.8% -0.109 -0.03))',
        main: '#7f6724'
      },
      line:{
        main:"#a634f6",
        main:"#1a3a6e",
      },
    },
    supTitle: {
      color: '#1a3a6e',
      color: '#3faddz',
      backgroundImage: 'radial-gradient(circle, #dddddd, #3fadda 50%, #4796ec 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      bg: 'transparent',
    },
    // supTitle: {
    //   color: '#1a3a6e',
    //   color: '#dddddd',
    //   backgroundImage: 'radial-gradient(circle, #dddddd, #9f1efa 50%, #4796ec 100%)',
    //   backgroundClip: 'text',
    //   WebkitBackgroundClip: 'text',
    //   WebkitTextFillColor: 'transparent',
    //   bg: 'transparent',
    // },
    title: {
      color: '#dddddd',
      backgroundImage: 'none',
      WebkitTextFillColor: '#dddddd',
      bg: '#555555',
    },
    subTitle: {

      color: '#1a3a6e',
      fontWeight: 600,
      fontSize: '1rem',
      display: 'block',
      mb: 1,
    },
    bgGrid1:{
      backgroundImage:' linear-gradient(#dddddd00 5px, transparent 2px), linear-gradient(to right, #dddddd05 4px, transparent 2px)',
      backgroundSize: '10px 10px',
      backgroundColor:' #212121',
      backgroundColor:' #121212',
    },
    bgGrid2:{
      backgroundImage:' linear-gradient(#dddddd03 5px, transparent 2px), linear-gradient(to right, #dddddd05 4px, transparent 2px)',
      backgroundImage: 'linear-gradient(rgba(27, 28, 29, 0.58) 1px, transparent 1px), linear-gradient(to right, rgba(33, 45, 58, 0.3) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
      backgroundColor:' #212121',
      backgroundColor:' #121212',
    },
    bgGrid3:{
      backgroundImage:'radial-gradient(#30363d 1px, transparent 1px)',
      backgroundSize: '30px 20px',
      borderTop: '5px solid',
      borderBottom: '5px solid',
    },
    card1: {
      borderRadius: 8,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(30, 30, 30, 0.9)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.07)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    },
    card2: {
      borderRadius: 5,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(30, 30, 30, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.07)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    },
    btn1:{
      borderRadius:2,
      color: '#dddddd',
      fontSize:'1.0rem',
      padding:'8px 15px',
      background:"#1d4477",
    },
    btn1Hover:{
      background:'#1d4497',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            backgroundColor: '#1e1e1e',
          },
        },
      },
    },
  };


  
  const commonThemeOptions = {
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
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            padding: '8px 16px',
          },
        },
      },
    },
  };

  const theme = useMemo(
    () =>
      createTheme({
        ...commonThemeOptions,
        ...(mode === 'light' ? lightThemeOptions : darkThemeOptions),
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
};