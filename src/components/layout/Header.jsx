import { useState, useContext, Children } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Avatar,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  DarkMode, 
  LightMode,
  Home,
  Search,
  LibraryBooks,
  Assignment,
  Book,
  Approval,
  ContactMail,
  GitHub,
} from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import { ColorModeContext } from '../../contexts/ThemeContext';
import MainTitle from '../MainTitle';
import MainText from '../MainText';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const colorModeContext = useContext(ColorModeContext);
  const { toggleColorMode, mode } = colorModeContext || { toggleColorMode: () => {}, mode: 'light' };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'الرئيسية', path: '/', icon: <Home /> },
    { label: 'من نحن', path: '/about', icon: <InfoIcon /> },
    { label: 'البحث الأكاديمي', path: '/academic-search', icon: <Search /> },
    { label: 'المكتبة الإلكترونية', path: '/library', icon: <LibraryBooks /> },
    { label: 'معاملات جاهزة', path: '/ready-transactions', icon: <Assignment /> },
    { label: 'الكتب', path: '/approval', icon: <Book /> },
    { label: 'طلب الاعتماد', path: '/approval', icon: <Approval /> },
    { label: 'تواصل معنا', path: '/contact', icon: <ContactMail /> },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        py: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(9, 105, 218, 0.05)'
          : 'rgba(88, 166, 255, 0.05)',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Avatar sx={{ 
          width: 60, 
          height: 60, 
          mx: 'auto', 
          mb: 2,
          backgroundColor: theme.palette.bg2.main
        }}>
          <SchoolIcon 
          sx={{ 
            fontSize: 30,
            color: theme.palette.bg3.main

           }} />
        </Avatar>
        <Typography variant="h6" sx={{ 
          fontWeight: 700,
          color: theme.palette.text.primary
        }}>
          المكتبة المركزية
        </Typography>
      </Box>
      
      {/* Navigation Items */}
      <List sx={{ px: 2, py: 2 }}>
        {navItems.map((item) => {
          const active = isActive(item.path);
          
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton 
                component={Link}
                to={item.path}
                onClick={toggleDrawer}
                selected={active}
                sx={{ 
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  py: 1.5,
                  ...(active && {
                    backgroundColor: theme.palette.mode === 'light' 
                      ? 'rgba(9, 105, 218, 0.08)'
                      : 'rgba(88, 166, 255, 0.08)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '60%',
                      width: '3px',
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '4px',
                    }
                  })
                }}
              >
                <ListItemIcon sx={{ 
                  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
                  minWidth: '40px'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: active ? 600 : 500,
                    color: active ? theme.palette.primary.main : theme.palette.text.primary
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      
      {/* Footer */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        p: 2, 
        borderTop: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <IconButton onClick={toggleColorMode} size="small" aria-label="تبديل الوضع المظلم">
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
        
        <Typography variant="caption" color="text.secondary">
          الإصدار 2.0.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0}
      id="main-header"
      sx={{
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.81)' 
          : 'rgba(30, 30, 30, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: isMobile ? 0 : 1
            }}
            >
            المكتبة المركزية
          </Typography>

          <Box

            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems:'center',
              justifyContent:'center',
              flexGrow: isMobile ? 0 : 1,
              pt:1,
              }}>
              {/* show desktop */}
              <Box
                component={Link}
                to="/" 
                sx={{
                  textDecoration:'none',
                }}
              >
                <Typography
                  sx={{
                    color:'yellow',
                    display:'none',
                  }}
                >/- همام مختار عبدالسلام /- الحارث مختار عبدالسلام</Typography>
                <MainTitle mainTitle={'المكتب المركزية'} fSize='1.5rem'/>
              </Box>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          {/* <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            المكتبة المركزية
          </Typography> */}
          <Box 
          component={Link}
          to="/"
          sx={{
            textDecoration:'none',
            display:{xs:'flex',md:'none'},
            flexGrow:1,
            width:'100%',
          }}
          >
           <MainText mainText={"المكتبة المركزية"} fSize={'1.4rem'}/>
          </Box>



          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                aria-label={item.label}
                sx={{ 
                  color: 'inherit', 
                  mx: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton 
            onClick={toggleColorMode} 
            aria-label="تبديل الوضع المظلم"
            sx={{ ml: 1,
              color:theme.palette.primary.main
             }}
          >
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;