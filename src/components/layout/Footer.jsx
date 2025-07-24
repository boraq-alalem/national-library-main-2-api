import { Box, Container, Typography, Grid, Link, Divider, useTheme } from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'روابط سريعة',
      links: [
        { text: 'الرئيسية', url: '/' },
        { text: 'البحث الأكاديمي', url: '/search' },
        { text: 'المكتبة الإلكترونية', url: '/library' },
        { text: 'طلب الاعتماد', url: '/approval' },
      ]
    },
    {
      title: 'معلومات',
      links: [
        { text: 'من نحن', url: '/about' },
        { text: 'الأسئلة الشائعة', url: '/faq' },
        { text: 'شروط الخدمة', url: '/terms' },
        { text: 'سياسة الخصوصية', url: '/privacy' },
      ]
    },
    {
      title: 'الدعم',
      links: [
        { text: 'تواصل معنا', url: '/contact' },
        { text: 'الدعم الفني', url: '/support' },
        { text: 'مركز المساعدة', url: '/help' },
        { text: 'الشكاوى والاقتراحات', url: '/feedback' },
      ]
    },
  ];

  const contactInfo = [
    { icon: <Email fontSize="small" />, text: 'info@nationallibrary.edu' },
    { icon: <Phone fontSize="small" />, text: '+218 1112223' },
    { icon: <LocationOn fontSize="small" />, text: 'طرابلس، ليبيا' },
  ];

  const mapLink = {
    icon: <LocationOn fontSize="small" />, 
    text: (
      <a href="https://www.google.com/maps/place/V8JW%2BVH7+%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9+%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9+%D8%A7%D9%84%D9%84%D9%8A%D8%A8%D9%8A%D8%A9%D8%8C+Unnamed+Road,,+%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3%E2%80%AD/data=!4m2!3m1!1s0x13a89011fa8fe2db:0xea156bcea5bac97c?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjIwLjEYACDXggMqhgEsOTQyNjc3MjY5NDI3NTMwMyw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw0NzA4NDM5Myw5NDIxMzIwMCw5NDI1ODMyNUICTFk%3D&skid=02a61db8-ed35-4347-b708-4ba7f51cdb20&g_st=aw" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>
        <span aria-label="موقع المكتبة على الخريطة">موقع المكتبة على الخريطة</span>
      </a>
    )
  };

  const socialLinks = [
    { icon: <Facebook />, url: 'https://www.facebook.com/Maktabatajora?rdid=z0nFsStIE3Dz9tWc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dx6CgzLS%2F', label: 'فيسبوك' },
    { icon: <Twitter />, url: '#', label: 'تويتر' },
    { icon: <Instagram />, url: '#', label: 'انستغرام' },
    { icon: <LinkedIn />, url: '#', label: 'لينكدإن' },
  ];

  return (
    <Box 
      component="footer" 
      sx={{
        textAlign:{xs:'center',sm:'start'},
        py: 6,
        backgroundColor: theme.palette.mode === 'light' 
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={700}>
              المكتبة المركزية
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              المنصة الرائدة في اعتماد ومراجعة الرسائل البحثية لطلبة الماجستير والدكتوراه.
            </Typography>
            <Box>
              {contactInfo.map((item, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent:{xs:'center',sm:'start'},
                    mb: 1.5,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ ml: 1}}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent:{xs:'center',sm:'start'},
                  mb: 1.5,
                  color: theme.palette.text.secondary,
                }}
              >
                {mapLink.icon}
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {mapLink.text}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Typography variant="h6" color="text.primary" gutterBottom fontWeight={600}>
                {section.title}
              </Typography>
              <Box>
                {section.links.map((link, i) => (
                  <Box key={i} sx={{ mb: 1 }}>
                    <Link 
                      href={link.url} 
                      color="text.secondary" 
                      underline="hover"
                      sx={{ 
                        display: 'inline-block',
                        '&:hover': { color: theme.palette.primary.main }
                      }}
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={600}>
              تابعنا
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 ,                   
             justifyContent:{xs:'center',sm:'start'},
}}>
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.url} 
                  color="text.secondary"
                  aria-label={social.label}
                  rel="noopener noreferrer"
                  sx={{ 
                    '&:hover': { 
                      color: theme.palette.primary.main 
                    }
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        
        {/* Copyright */}
        <Box sx={{ textAlign: 'center' ,position:'relative'}}>
          <Typography variant="body2" color="text.secondary">
            جميع الحقوق محفوظة © {currentYear} المكتبة المركزية
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{
            position:'absolute',
            botton:0,
            color:'transparent'
          }}
          >
              /- همام مختار عبدالسلام 
              /- الحارث مختار عبدالسلام 
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;