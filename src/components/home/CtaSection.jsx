import { Box, Container, Typography, Button, Paper, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

const CtaSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 10 ,
              background: theme.palette.bg1.main, 
        ...theme.bgGrid3,  
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,   
    } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            borderRadius: 4,
            background: theme.palette.mode === 'light'
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
              : `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
            color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.text.primary,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: alpha(theme.palette.common.white, 0.1),
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -70,
              left: -70,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: alpha(theme.palette.common.white, 0.1),
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
              }}
            >
              هل أنت مستعد لبدء رحلتك البحثية؟
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                opacity: 0.9,
                lineHeight: 1.6
              }}
            >
              استفد من خدماتنا المتكاملة للتحقق من تفرد عنوانك البحثي، واستعراض الرسائل السابقة، وطلب الاعتماد الرسمي لرسالتك العلمية.
            </Typography>
            
 
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CtaSection;