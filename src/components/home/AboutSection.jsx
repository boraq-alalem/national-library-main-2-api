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

const AboutSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <VerifiedUser fontSize="large" color="primary" />,
      title: 'التحقق من الأصالة',
      description: 'التأكد من فرادة وأصالة العناوين البحثية وعدم تكرارها'
    },
    {
      icon: <Gavel fontSize="large" color="primary" />,
      title: 'الاعتماد الرسمي',
      description: 'اعتماد الرسائل البحثية وفق المعايير الأكاديمية المعتمدة'
    },
    {
      icon: <School fontSize="large" color="primary" />,
      title: 'الدعم الأكاديمي',
      description: 'تقديم الإرشاد والدعم اللازم للباحثين لتطوير أبحاثهم'
    },
    {
      icon: <MenuBook fontSize="large" color="primary" />,
      title: 'الأرشفة الإلكترونية',
      description: 'حفظ وأرشفة الرسائل العلمية في قاعدة بيانات متاحة للباحثين'
    }
  ];

  return (
    <Box 
      id="about"
      sx={{ 
        py: { xs: 8, md: 10 },
        // backgroundColor: theme.palette.background.default
        background: theme.palette.bg1.main,    
        ...theme.bgGrid1,   
        borderTop:'4px solid ',
        borderColor:theme.palette.bg2.main

      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          
          <SubTitle subTitle={"من نحن"}/>
          <MainTitle mainTitle={"دورنا في خدمة البحث العلمي"}/>
          <MainText mainText={"المكتبة الوطنية تلعب دوراً محورياً في تنظيم ومراجعة الرسائل البحثية، وضمان جودتها وفق المعايير الأكاديمية العالمية. نسعى لتوفير بيئة بحثية متكاملة تدعم الباحثين وتسهم في تطوير المحتوى العلمي."} />
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
                  backdropFilter: 'blur(10px)',
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

export default AboutSection;