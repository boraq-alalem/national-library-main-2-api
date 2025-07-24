// import ServiceCard from './ServiceCard';
// import { useTheme } from '@mui/material/styles';
// import { Box, Typography, Grid } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// const facilities = [
//   {
//     title: 'قاعة القراءة',
//     description: 'قاعة هادئة وواسعة مجهزة للقراءة والبحث',
//     icon: <MenuBookIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#2C3E50',
//     path: '#reading',
//   },
//   {
//     title: 'مختبر الحاسوب',
//     description: 'مختبر مجهز بأحدث أجهزة الحاسوب وخدمة الإنترنت',
//     icon: <ComputerIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#2980B9',
//     path: '#lab',
//   },
//   {
//     title: 'قاعة المحاضرات والتدريب',
//     description: 'قاعة مخصصة للمحاضرات والدورات التدريبية',
//     icon: <SchoolIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#16a085',
//     path: '#lecture',
//   },
//   {
//     title: 'قاعة الاجتماعات',
//     description: 'قاعة مخصصة للفعاليات والمؤتمرات الصغيرة',
//     icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#8e44ad',
//     path: '#meeting',
//   },
// ];

// const FacilitiesSection = () => {
//   const theme = useTheme();
//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, background: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #f5f7fa 0%, #e0eafc 100%)' : 'linear-gradient(120deg, #23272f 0%, #2C3E50 100%)' }}>
//       <Typography variant="h3" align="center" fontWeight={800} mb={6} color={theme.palette.mode === 'light' ? '#2C3E50' : '#fff'}>
//         مرافق المكتبة
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {facilities.map((facility, idx) => (
//           <Grid item xs={12} sm={6} md={3} key={idx}>
//             <ServiceCard service={facility} index={idx} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FacilitiesSection;

import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  VerifiedUser,
  Gavel,
  School,
  MenuBook
} from '@mui/icons-material';
import MainTitle from '../MainTitle';
import SubTitle from '../SubTitle';
import MainText from '../MainText';

const FacilitiesSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <MenuBookIcon fontSize="large" color="primary" />,
      title: ' قاعة القراءة',
      description: 'قاعة هادئة وواسعة مجهزة للقراءة والبحث'
    },
    {
      icon: <ComputerIcon fontSize="large" color="primary" />,
      title: ' مختبر الحاسوب',
      description: 'مختبر مجهز بأحدث أجهزة الحاسوب وخدمة الإنترنت'
    },
    {
      icon: <SchoolIcon fontSize="large" color="primary" />,
      title: 'قاعة المحاضرات والتدريب',
      description: 'قاعة مخصصة للمحاضرات والدورات التدريبية'
    },
    {
      icon: <MeetingRoomIcon fontSize="large" color="primary" />,
      title: 'قاعة الاجتماعات',
      description: 'قاعة مخصصة للفعاليات والمؤتمرات الصغيرة'
    }
  ];

  return (
    <Box 
      id="about"
      sx={{ 
        py: { xs: 8, md: 10 },
        background: theme.palette.bg1.main, 
        ...theme.bgGrid3,   
        borderColor:theme.palette.bg1.main, 
        backgroundColor: theme.palette.bg1.main,   

      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          
          <MainTitle  mainTitle={"مرافق المكتبة"} />
          <MainText mainText={"اكتشف مرافقنا المتنوعة المصممة لخدمتك"} />


        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  ...theme.card1,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'light'
                      ? `0 15px 30px 0 ${alpha(theme.palette.primary.main, 0.2)}`
                      : `0 15px 30px 0 ${alpha(theme.palette.common.black, 0.4)}`,
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    mb: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacilitiesSection;