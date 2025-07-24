import { Box, useTheme } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTopButton from '../components/layout/ScrollToTopButton';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
        <Outlet />
      </Box>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default MainLayout;