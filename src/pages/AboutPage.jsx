import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import MainText from '../components/MainText';
import {
  MenuBook,
  Computer,
  MeetingRoom,
  School,
  Storage,
  Lightbulb
} from '@mui/icons-material';

const AboutPage = () => {
  const theme = useTheme();

  const facilities = [
    {
      icon: <MenuBook fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قاعة قراءة عامة',
      description: 'مهيأة ومريحة للقراءة والبحث'
    },
    {
      icon: <Computer fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'معمل حاسوب',
      description: 'يقدم الدعم التقني والدورات العلمية'
    },
    {
      icon: <MeetingRoom fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قاعة اجتماعات ومحاضرات',
      description: 'مخصصة للفعاليات والمؤتمرات العلمية'
    },
    {
      icon: <Storage fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قسم الأرشفة',
      description: 'للأرشفة الورقية والرقمية للرسائل العلمية'
    },
    {
      icon: <School fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قسم المنظومة',
      description: 'لتتبع العناوين وضمان تفردها على مستوى ليبيا'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{
          pt: { xs: 10, sm: 12, md: 16 },
          pb: { xs: 8, sm: 10, md: 12 },
          backgroundImage: 'url("/hero1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          '&:before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: theme.palette.mode === 'light'
              ? `linear-gradient(120deg, ${alpha(theme.palette.primary.dark, 0.6)} 0%, ${alpha(theme.palette.primary.main, 0.5)} 100%)`
              : `linear-gradient(120deg, ${alpha(theme.palette.grey[900], 0.7)} 0%, ${alpha(theme.palette.grey[800], 0.6)} 100%)`,
            zIndex: 1,
          },
        }}
      >
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            من نحن
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              fontWeight: 400,
              color: alpha('#ffffff', 0.95),
              lineHeight: 1.7,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.4rem' },
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            المكتبة المركزية بالهيئة الليبية للبحث العلمي
          </Typography>
        </Container>
      </Box>

      {/* About Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 },
          background: theme.palette.mode === 'light'
            ? `linear-gradient(135deg, ${alpha('#f5f7fa', 0.9)} 0%, ${alpha('#e4efe9', 0.9)} 100%)`
            : `linear-gradient(135deg, ${alpha('#161b22', 0.95)} 0%, ${alpha('#0d1117', 0.95)} 100%)`,
          position: 'relative',
          overflow: 'hidden',
                 ...theme.bgGrid1,   
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,   
        }}
      >
        {/* Decorative elements */}
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
            filter: 'blur(30px)',
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SubTitle subTitle="تعرف علينا" />
            <MainTitle mainTitle="المكتبة المركزية بالهيئة الليبية للبحث العلمي" />
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Box 
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 3,
                  backgroundColor: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  boxShadow: theme.customShadows?.card,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  textAlign:'center'
                }}
              >
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  المكتبة المركزية بالهيئة الليبية للبحث العلمي هي مركز معرفي وطني تأسّس في ثمانينات القرن الماضي، وتحوّل على مرّ السنين إلى حاضنة علمية تحتضن آلاف الرسائل والمراجع والدراسات الأكاديمية من مختلف التخصصات.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 0 }}>
                  دورنا لا يقتصر على حفظ المعرفة فقط، بل نُعدّ شريكًا حقيقيًا في رحلة الطالب الباحث؛ منذ لحظة اختياره لعنوان رسالته مرورًا بمراحله الأولى في التحقق من تفرد العنوان واعتماده رسميًا، ووصولاً إلى دعم رحلته العلمية من خلال توفير قاعدة ضخمة من الرسائل العلمية السابقة، وأجواء مهيأة للقراءة والبحث، وانتهاءً بأرشفة جهده العلمي وضمان حفظه وإتاحته للأجيال القادمة.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Facilities Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.mode === 'light' 
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
          position: 'relative',
          overflow: 'hidden',
          ...(theme.palette.mode === 'light' && {
            backgroundImage: 'linear-gradient(rgba(208, 215, 222, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(208, 215, 222, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }),
          ...(theme.palette.mode === 'dark' && {
            backgroundImage: 'linear-gradient(rgba(48, 54, 61, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(48, 54, 61, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }),
       ...theme.bgGrid3,   
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,   
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SubTitle subTitle="مرافقنا" />
            <MainTitle mainTitle="تتكوّن مكتبتنا من مرافق متعددة" />
          </Box>
          
        <Grid container spacing={4}>
          {facilities.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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

      {/* Vision Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 },
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SubTitle subTitle="رؤيتنا" />
            <MainTitle mainTitle="نحو مستقبل أفضل للبحث العلمي" />
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              ...theme.customStyles?.glassCard,
              backgroundColor: theme.palette.mode === 'light' 
                ? alpha(theme.palette.primary.main, 0.05)
                : alpha(theme.palette.primary.main, 0.1),
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute',
                top: -30,
                right: -30,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: alpha(theme.palette.primary.main, 0.1),
                zIndex: 0
              }} 
            />
            
            <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <Lightbulb sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 28 }} />
                <Typography variant="h5" component="h2" fontWeight={600}>
                  رؤيتنا المستقبلية
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                رؤيتنا أن نكون مخزونًا علميًا حيًا، وواجهة معرفية متطورة، تُمكّن الباحث الليبي من أدوات العصر وتضع إنتاجه العلمي في المكانة التي يستحقها.
              </Typography>
              
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                نؤمن أن دعم البحث العلمي يبدأ من حفظه واحترامه، ونطمح لأن نكون منارات مضيئة في طريق الباحثين، ونقطة التقاء بين الطالب والإنجاز، بين الماضي العلمي والمستقبل البحثي.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;