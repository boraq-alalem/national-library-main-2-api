import { Box, Container, Typography } from '@mui/material';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';

const ReadyTransactions = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: theme => theme.palette.background.default, minHeight: '60vh' }}>
      <Container maxWidth="md">
        <MainTitle mainTitle="المعاملات الجاهزة" />
        <MainText>
          هنا يمكنك تحميل النماذج والمعاملات الرسمية الجاهزة للاستخدام في إجراءاتك الأكاديمية.
        </MainText>
        {/* يمكنك إضافة قائمة بالملفات أو الروابط هنا */}
      </Container>
    </Box>
  );
};

export default ReadyTransactions;
