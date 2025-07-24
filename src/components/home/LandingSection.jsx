import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const LandingSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: { xs: 14, md: 15 },
                background: theme.palette.mode === 'light'
                    ? `linear-gradient(45deg, ${alpha(theme.palette.background.default, 0.1)}, ${alpha(theme.palette.background.paper, 0.915)})`
                    : `linear-gradient(45deg, ${alpha(theme.palette.background.paper, 0.991)}, ${alpha(theme.palette.background.default, 0.15)})`,
                background:theme.palette.background2.background,    
                overflow: 'hidden',
                position: 'relative',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg" >
                <Box sx={{ mb: 6}}>
                    <Typography
                        variant="h1"
                        component="h1"
                        
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                            fontWeight: 700,
                            mb: 0,
                            ...theme.supTitle
                
                        }}
                    >
                        المكتبة المركزية
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.375rem' },
                            fontWeight: 500,
                            ...theme.title,
                            wordSpacing: '2px',
                            letterSpacing: '-1px',
                            lineHeight: 1.5,
                            mt: 2,
                            
                        }}
                        
                    >
                        في رحلتك العلمية، نحن هنا لمساعدتك على البدء بثقة.
                        <br />
                        نوفّر لك خدمة فحص وتوثيق العناوين البحثية، لضمان عدم تكرارها ودعم جهودك العلمية بأساس رصين.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>

                    <Button
                        component={Link}
                        to="/ready-transactions"
                        variant="outlined"
                        aria-label="معاملات جاهزة"
                        sx={{
                            border: `2px solid ${theme.palette.primary.main}`,
                            background: 'transparent',
                            color: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                color: theme.palette.primary.main,
                                transform: 'scale(1.05)',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            textDecoration: 'none',
                            padding: '7px 20px',
                            borderRadius: '25px',
                            fontSize: '15px',
                            fontWeight: 600,
                            ...theme.title,
                            backdropFilter:'blur(5px)',
                            filter: 'drop-shadow(0px 0px 5px rgba(168, 163, 163, 0.95))',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        <span>معاملات جاهزة</span>
                        <BookmarkAddedIcon sx={{
                            color:'#000000',
                            ...theme.supTitle,
                            }}/>
                        {/* <Box component="img" src="/v1_assets/book.png" alt="book" sx={{ width: 25 }} /> */}
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 8, gap: 7 }}>
                    <picture>
                        <source srcSet="/v1_assets/banner/banner-1-Photoroom (1).webp" type="image/webp" />
                        <img src="/v1_assets/banner/banner-1-Photoroom (1).png" alt="banner-1" width="140" height="140" style={{ width: 140 }} />
                    </picture>
                    <picture>
                        <source srcSet="/v1_assets/banner/banner-2-Photoroom.webp" type="image/webp" />
                        <img src="/v1_assets/banner/banner-2-Photoroom.png" alt="banner-2" width="170" height="170" style={{ width: 170, filter: 'brightness(1.8) contrast(1.5) invert(0.1)' }} />
                    </picture>
                </Box>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    width: 120,
                    height: 120,
                    backgroundImage: `radial-gradient(${alpha(theme.palette.secondary.main, 0.15)} 15%, transparent 16%), radial-gradient(${alpha(theme.palette.secondary.main, 0.715)} 15%, transparent 16%)`,
                    backgroundPosition: '0 0, 10px 10px',
                    backgroundSize: '20px 20px',
                    opacity: {xs:0.1,md:0.5},
                    zIndex: 0,
                    transform: 'rotate(45deg)',
                    top: 20,
                    right: -100,
                    width: 350,
                    height: 350,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: 120,
                    height: 120,
                    backgroundImage: `radial-gradient(${alpha(theme.palette.secondary.main, 0.15)} 15%, transparent 16%), radial-gradient(${alpha(theme.palette.secondary.main, 0.15)} 15%, transparent 16%)`,
                    backgroundPosition: '0 0, 10px 10px',
                    backgroundSize: '20px 20px',
                    opacity: 0.92,
                    opacity: {xs:0.4,md:0.5},
                    zIndex: 0,
                    transform: 'rotate(45deg)',
                    bottom: 0,
                    left: -100,
                    height: 350,
                    width: 350,
                }}
            />
        </Box>
    );
};

export default LandingSection;