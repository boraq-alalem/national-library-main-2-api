import { Box, Typography, Grid, Card, CardMedia, Container, useTheme } from '@mui/material';
import MainTitle from '../MainTitle';

// قائمة الصور من مجلد public/portfolio
const images = [
  '/portfolio/FB_IMG_1748454455487.jpg',
  // '/portfolio/FB_IMG_1748454508543.jpg',
  '/portfolio/IMG-20250528-WA0000.jpg',
  '/portfolio/FB_IMG_1748454618764.jpg',
  '/portfolio/FB_IMG_1748454697508.jpg',
  '/portfolio/IMG-20250528-WA0006.jpg',
  '/portfolio/IMG-20250528-WA0010.jpg',
];

const PortfolioSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: theme.palette.bg2.main,    
        ...theme.bgGrid2,   

      }}
    >
      <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column'}}>

        <MainTitle mainTitle={"معرض الأعمال"} />

        <Grid container spacing={3} justifyContent="center" mt={5}>
          {images.map((img, idx) => {
            const webp = img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: theme.palette.mode === 'light' ? 4 : 8,
                    overflow: 'hidden',
                    transition: '0.3s',
                    background: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'light' ? 8 : 16,
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <picture>
                    <source srcSet={webp} type="image/webp" />
                    <img
                      src={img}
                      alt={`معرض الأعمال ${idx + 1}`}
                      loading={idx < 2 ? "eager" : "lazy"}
                      width="400"
                      height="240"
                      style={{
                        height: 240,
                        width: '100%',
                        objectFit: 'cover',
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.92)' : 'none',
                        transition: '0.3s',
                        display: 'block',
                      }}
                      decoding="async"
                    />
                  </picture>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
