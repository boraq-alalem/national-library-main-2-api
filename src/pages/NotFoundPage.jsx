import { Box, Typography, useTheme, Container } from '@mui/material';

const NotFoundPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.default,
        pt: 8,
        pb: 8,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={800} color={theme.palette.primary.main} mb={2}>
          قريباً
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} fontWeight={500}>
          هذه الصفحة غير متوفرة حالياً، سيتم إطلاق الخدمة قريباً.
        </Typography>
      </Container>
    </Box>
  );
};

export default NotFoundPage;