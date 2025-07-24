import { Box, Typography, Paper, Button, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

const ServiceCard = ({ service, index }) => {
  const theme = useTheme();
  const { title, description, icon, path } = service;

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        ...theme.card2,
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: theme.palette.mode === 'light'
            ? `0 15px 30px 0 ${alpha(theme.palette.primary.main, 0.2)}`
            : `0 15px 30px 0 ${alpha(theme.palette.common.black, 0.4)}`,
          '& .icon-box': {
            transform: 'scale(1.1)',
          },
          '& .card-content': {
            transform: 'translateY(-5px)',
          }
        },
        animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`,
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      {/* Decorative shape */}
      <Box
        sx={{
          position: 'absolute',
          top: -15,
          right: -15,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: alpha(theme.palette.primary.main, 0.1),
          opacity: 1,
        }}
      />
      
      <Box sx={{ p: 3 }}>
        {/* Icon */}
        <Box
          className="icon-box"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            mb: 3,
            transition: 'transform 0.3s ease',
            boxShadow: `0 5px 15px ${alpha(theme.palette.common.black, 0.1)}`,
          }}
        >
          {icon}
        </Box>
        
        {/* Content */}
        <Box 
          className="card-content"
          sx={{
            transition: 'transform 0.3s ease',
          }}
        >
          <Typography 
            variant="h5" 
            component="h3"
            sx={{ 
              mb: 2,
              fontWeight: 600,
              color: theme.palette.text.primary
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body2"
            sx={{ 
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            {description}
          </Typography>
          
          <Button
            component={Link}
            to={path}
            variant="text"
            color="primary"
            endIcon={<ArrowBack />}
            sx={{ 
              fontWeight: 500,
              mt: 'auto',
              alignSelf: 'flex-start',
              '&:hover': {
                backgroundColor: 'transparent',
                transform: 'translateX(-5px)',
              }
            }}
          >
            استكشف الخدمة
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ServiceCard;