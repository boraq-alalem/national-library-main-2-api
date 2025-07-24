import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Search,
  LibraryBooks,
  PictureAsPdf,
  CheckCircleOutline,
} from '@mui/icons-material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import TestSec from './TestSec';
import MainTitle from '../MainTitle';
import MainText from '../MainText';
import SubTitle from '../SubTitle';

const ServicesSection = () => {
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const services = [
    {
      title: '  العناوين المحجوزة المعتمدة',
      description: 'محرك بحث ذكي للتحقق من تفرد عنوانك البحثي وضمان عدم تكراره',
      icon: <Search fontSize="large" />,
      path: '/academic-search'
    },
    {
      title: 'استعراض الرسائل',
      description: 'مكتبة إلكترونية شاملة تتيح الوصول للرسائل الأكاديمية السابقة',
      icon: <LibraryBooks fontSize="large" />,
      path: '/library'
    },
    {
      title: 'معاملات جاهزة',
      description: 'خدمة تتيح لك الوصول السريع إلى نماذج معاملات رسمية ووثائق جاهزة ',
      icon: <BookmarkAddedIcon fontSize="large" />,
      path: '/ready-transactions'
    },
    {
      title: 'طلب الاعتماد',
      description: 'خدمة اعتماد عناوين الرسائل البحثية وفقاً للمعايير الأكاديمية',
      icon: <CheckCircleOutline fontSize="large" />,
      path: '/approval'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: alpha(theme.palette.background.default, 0.5),
        position: 'relative',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'url("https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>

          
          <SubTitle subTitle={"خدماتنا"} />
          <MainTitle mainTitle={"ما نقدمه للباحثين"} />
          <MainText mainText={"توفر المكتبة الوطنية مجموعة من الخدمات المتكاملة لمساعدة الباحثين في جميع مراحل إعداد رسائلهم العلمية، بدءاً من اختيار العنوان وحتى الاعتماد النهائي."} />
        </Box>
        
        {/* <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Grow in={true} timeout={500 + index * 200}>
                <ServiceCard service={service} index={index} />
              </Grow>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            service ? (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={true} timeout={500 + index * 200}>
                  {ServiceCard({service,index})}
                </Grow>
              </Grid>
            ) : null
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;






// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

