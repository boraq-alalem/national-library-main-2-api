import { Box, Container, Typography, Grid, Card, CardContent, IconButton, useTheme } from '@mui/material';
import { Phone, Email, Facebook, LocationOn } from '@mui/icons-material';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';
import { alpha } from '@mui/material/styles';

const ContactPage = () => {
  const theme = useTheme();
  const contactInfo = [
    {
      icon: <Phone />,
      title: 'رقم الهاتف',
      value: '+218 0000000  ',
      action: () => window.open('tel:+2180000000')
    },
    {
      icon: <Email />,
      title: 'البريد الإلكتروني',
      value: 'info@nationallibrary.sa',
      action: () => window.open('mailto:info@nationallibrary.sa')
    },
    {
      icon: <Facebook />,
      title: 'فيسبوك',
      value: 'المكتبة المركزية ',
      action: () => window.open('https://www.facebook.com/Maktabatajora?rdid=z0nFsStIE3Dz9tWc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dx6CgzLS%2F', '_blank')
    },
    {
      icon: <LocationOn />,
      title: 'العنوان ',
      value: 'تاجوراء - طرابلس - ليبيا',
      action: () => window.open('https://maps.app.goo.gl/aghJUTuZBPvbSMQV9', '_blank')
    }
  ];

  return (
    <>




    <Box  sx={{ pt: 12,
      pt:15,
      pb: 4,
      px:{xs:2,md:10,lg:15},
      ...theme.bgGrid1,   
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,
        position:'relative'  
     }}>

      <MainTitle mainTitle={"تواصل معنا"} />
      <MainText mainText={"نحن هنا لخدمتكم ومساعدتكم. لا تترددوا في التواصل معنا عبر أي من الوسائل التالية"} />
      
      {/* معلومات الاتصال */}
      <Grid container spacing={3} mt={4} mb={6}>
        {contactInfo.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              onClick={item.action}
              sx={{ 
                height: '100%',
                textAlign: 'center',
                cursor: 'pointer',
                ...theme.card1,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.palette.mode === 'light' 
                    ? '0 12px 40px 0 rgba(26, 58, 110, 0.25)'
                    : '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
                }
              }}>
              <CardContent sx={{ py: 3 }}>
                <IconButton 
                  sx={{ 
                    mb: 2,
                    backgroundColor: theme.palette.bg3.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.bg3.sec,
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  {item.icon}
                </IconButton>
                <Typography variant="h6" mb={1} sx={{ color: theme.palette.primary.main }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: { xs: 100, md: 200 },
            height: { xs: 100, md: 200 },
            borderRadius: '50%',
            background: alpha(theme.palette.primary.light, 0.1),
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '10%',
            width: { xs: 80, md: 150 },
            height: { xs: 80, md: 150 },
            borderRadius: '50%',
            background: alpha(theme.palette.secondary.main, 0.1),
            background: alpha(theme.palette.primary.light, 0.1),
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />

    </Box>

          {/* قسم الخريطة */}
      <Box sx={{
        py:12,
        px:{xs:2,md:8},
        
        ...theme.bgGrid3,   
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,  
      }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4} color="primary">
          موقعنا على الخريطة
        </Typography>

          <Box 
            sx={{ 
              width: '100%', 
              height: '400px',
              borderRadius: 1,
              ...theme.card2,
              overflow: 'hidden'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175.0561202187751!2d13.34618998892887!3d32.88211972395786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a89011f1a7ad53%3A0x71b3fc4afd4b6cc5!2z2YXZg9iq2KjYqSDYqtin2KzZiNix2KfYoQ!5e1!3m2!1sar!2sly!4v1753376038417!5m2!1sar!2sly"
              width="100%"
              height="100%"
              style={{ border: 0,padding:'0px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع المكتبة الوطنية"
            />
          </Box>
      </Box>
    </>

  );
};

export default ContactPage;