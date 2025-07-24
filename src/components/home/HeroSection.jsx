import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const handleStartSearch = () => {
    navigate('/search');
  };

  return (
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
        // تدرج لوني خفيف فوق الصورة
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: theme.palette.mode === 'light'
            // ? 'linear-gradient(120deg, #e0eafc99 0%, #f5f7fa99 100%)'
            // ? 'linear-gradient(120deg, rgb(0 0 0 / 60%) 0%, rgb(87 113 11 / 32%) 100%)'
            ? `linear-gradient(120deg,${alpha(theme.palette.primary.dark, 0.6)} 0%,${alpha(theme.palette.primary.main, 0.77)} 100%)`
            : `linear-gradient(120deg,${alpha(theme.palette.background.paper, 0.6)} 0%,${alpha(theme.palette.background.default, 0.6)} 100%)`,
            
            // : 'linear-gradient(120deg, #2C3E5099 0%, #1a263499 100%)',

          zIndex: 1,
        },
      }}
    >
      {/* Abstract shapes for visual interest */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          opacity: 0.1,
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -120,
          left: -120,
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: theme.palette.secondary.main,
          opacity: 0.1,
          zIndex: 2,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
        <Grid 
          container 
          spacing={0}
          alignItems="center" 
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 0 }, px: { xs: 2, sm: 4 } }}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  color: theme.palette.common.white,
                  letterSpacing: 1,
                  textShadow: `0 4px 24px ${alpha(theme.palette.common.black, 0.25)}`,
                }}
              >
                المكتبة الوطنية
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontWeight: 400,
                  color: alpha(theme.palette.common.white, 0.92),
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.3rem' },
                  textShadow: `0 2px 12px ${alpha(theme.palette.common.black, 0.18)}`,
                }}
              >
                نساعدك في اعتماد عنوانك البحثي وضمان تفرّده
              </Typography>
             
              <Box sx={{ mt: 15, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    background: alpha(theme.palette.common.white, 0.13),
                    borderRadius: 4,
                    px: { xs: 2, sm: 4 },
                    py: { xs: 2, sm: 3 },
                    boxShadow: `0 2px 16px 0 ${alpha(theme.palette.text.primary, 0.10)}`,
                    borderLeft: `6px solid ${theme.palette.info.main}`,
                    maxWidth: 500,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: theme.palette.common.white,
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                      textShadow: `0 2px 12px ${alpha(theme.palette.text.primary, 0.18)}`,
                    }}
                  >
                    "المكتبة ليست مجموعة كتب فقط، بل هي نافذة تطل على المستقبل"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.primary.light,
                      fontWeight: 500,
                      mt: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      letterSpacing: 0.5,
                    }}
                  >
                    — نيل غايمان
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;