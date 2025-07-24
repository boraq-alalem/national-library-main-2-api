import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Grid, Card, CardContent, Button, useTheme
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';
import { API_BASE_URL, BASE_DOMAIN, endpoints } from '../api/config';

const LibraryPage = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [latestData, setLatestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [pendingSearch, setPendingSearch] = useState('');
  const [pendingUniversity, setPendingUniversity] = useState(null);
  const [pendingSpecialization, setPendingSpecialization] = useState(null);
  const [pendingDegree, setPendingDegree] = useState(null);
  const [showFilterWarning, setShowFilterWarning] = useState(false);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // إضافة خيار للمستخدم لتحديد نوع البحث (عنوان أو باحث)
  const [searchType, setSearchType] = useState('title'); // 'title' أو 'author'
  const [isSearchMode, setIsSearchMode] = useState(false); // لتتبع ما إذا كان المستخدم في وضع البحث
  const resultsRef = React.useRef(null);

  useEffect(() => {
    let isMounted = true;
    const fetchLatest = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoints.latestTheses);
        if (!res.ok) throw new Error('network');
        const response = await res.json();
        if (isMounted) {
          // إعادة بناء البيانات لتناسب العرض (إضافة id افتراضي إذا لم يوجد)
          let rebuilt = Array.isArray(response.data) ? response.data.map((item, idx) => ({
            id: item.id ?? idx,
            title: item.title,
            year: item.year,
            pdf_path: item.pdf_path,
            university: typeof item.university === 'object' ? item.university.name : item.university,
            specialization: typeof item.specialization === 'object' ? item.specialization.name : item.specialization,
            degree: typeof item.degree === 'object' ? item.degree.name : item.degree,
            author: typeof item.author === 'object' ? item.author.name : item.author,
          })) : [];
          setLatestData(rebuilt);
          setPagination(response.pagination || null);
        }
      } catch (err) {
        if (isMounted) setError('تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو المحاولة لاحقاً.');
        // لا تفرغ النتائج حتى تبقى الصفحة كما هي
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchLatest();
    return () => { isMounted = false; };
  }, []);

  // جلب بيانات الفلاتر
  useEffect(() => {
    fetch(endpoints.universities)
      .then(res => res.json())
      .then(data => setUniversities(Array.isArray(data) ? data : []));
    fetch(endpoints.specializations)
      .then(res => res.json())
      .then(data => setSpecializations(Array.isArray(data) ? data : []));
    fetch(endpoints.degrees)
      .then(res => res.json())
      .then(data => setDegrees(Array.isArray(data) ? data : []));
  }, []);

  // تعديل منطق تفعيل زر البحث: يجب اختيار جامعة أو تخصص (ولا يكفي اختيار الدرجة العلمية فقط)
  // تفعيل زر البحث إذا تم اختيار جامعة أو تخصص أو تم إدخال نص في حقل البحث
  const isSearchEnabled = !!pendingUniversity || !!pendingSpecialization || !!pendingSearch.trim();

  // دالة التمرير لبداية قسم النتائج
  const scrollToResults = () => {
    setTimeout(() => {
      const element = document.getElementById('results-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  // دالة البحث مع إمكانية تحديد الصفحة
  const performSearch = async (page = 1, useCurrentFilters = false) => {
    const params = new URLSearchParams();
    const uni = useCurrentFilters ? selectedUniversity : pendingUniversity;
    const spec = useCurrentFilters ? selectedSpecialization : pendingSpecialization;
    const deg = useCurrentFilters ? selectedDegree : pendingDegree;
    const searchText = useCurrentFilters ? search : pendingSearch;
    
    if (uni) params.append('university_id', uni.id);
    if (spec) params.append('specialization_id', spec.id);
    if (deg) params.append('degree_id', deg.id);
    if (searchText.trim()) {
      if (searchType === 'title') {
        params.append('title', searchText.trim());
      } else if (searchType === 'author') {
        params.append('author', searchText.trim());
      }
    }
    params.append('page', page);
    
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${endpoints.searchTheses}?${params.toString()}`);
      if (!res.ok) throw new Error('network');
      const response = await res.json();
      // إعادة بناء البيانات لتناسب العرض (إضافة id افتراضي إذا لم يوجد)
      let rebuilt = Array.isArray(response.data) ? response.data.map((item, idx) => ({
        id: item.id ?? idx,
        title: item.title,
        year: item.year,
        pdf_path: item.pdf_path,
        university: typeof item.university === 'object' ? item.university.name : item.university,
        specialization: typeof item.specialization === 'object' ? item.specialization.name : item.specialization,
        degree: typeof item.degree === 'object' ? item.degree.name : item.degree,
        author: typeof item.author === 'object' ? item.author.name : item.author,
      })) : [];
      setLatestData(rebuilt);
      setPagination(response.pagination || null);
    } catch (err) {
      setError('تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو المحاولة لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  // عند الضغط على زر البحث
  const handleSearch = async () => {
    if (!pendingSearch.trim() && !pendingUniversity && !pendingSpecialization && !pendingDegree) {
      setShowFilterWarning(true);
      return;
    }
    setShowFilterWarning(false);
    setSearch(pendingSearch);
    setSelectedUniversity(pendingUniversity);
    setSelectedSpecialization(pendingSpecialization);
    setSelectedDegree(pendingDegree);
    setCurrentPage(1);
    setIsSearchMode(true); // تفعيل وضع البحث
    performSearch(1);
  };

  // عند الضغط على زر مسح الفلاتر، إعادة جلب بيانات latest
  const handleClear = async () => {
    setPendingSearch('');
    setPendingUniversity(null);
    setPendingSpecialization(null);
    setPendingDegree(null);
    setSearch('');
    setSelectedUniversity(null);
    setSelectedSpecialization(null);
    setSelectedDegree(null);
    setCurrentPage(1);
    setIsSearchMode(false); // إلغاء وضع البحث
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoints.latestTheses);
      if (!res.ok) throw new Error('network');
      const response = await res.json();
      setLatestData(Array.isArray(response.data) ? response.data : []);
      setPagination(response.pagination || null);
    } catch (err) {
      setError('تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت أو المحاولة لاحقاً.');
      // لا تفرغ النتائج حتى تبقى الصفحة كما هي
    } finally {
      setLoading(false);
    }
  };

  // لا حاجة للفلترة المحلية بعد الآن
  // const filtered = ...
  // const results = ...
  const results = latestData;

  return (
    <Container maxWidth={false}  sx={{ 

      pt:15,
      px:{xs:2,md:10,lg:15},
      
      ...theme.bgGrid1,
      }}>

      <MainTitle mainTitle={"المكتبة الإلكترونية"} />
      <MainText mainText={"مكتبة إلكترونية شاملة تتيح الوصول للرسائل الأكاديمية السابقة"} />
      <Box
        sx={{
          background: (theme) => theme.palette.mode === 'light' ? alpha(theme.palette.background.paper, 0.96) : alpha(theme.palette.background.paper, 0.91),
          borderRadius: 3,
          p: 3,
          my: 4,
          boxShadow: theme.shadows[3],
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* السطر الأول: البحث ونوع البحث */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', position: 'relative' }}>
          {showFilterWarning && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Typography align="center" color="warning.main" sx={{ fontWeight: 700, fontSize: 16, background: alpha(theme.palette.warning.light, 0.1), border: `1px solid ${theme.palette.warning.light}`, borderRadius: 2, px: 3, py: 1 }}>
                الرجاء اختيار أحد الفلاتر على الأقل
              </Typography>
            </Box>
          )}
          <TextField
            label="ابحث باسم الباحث أو الرسالة..."
            variant="outlined"
            value={pendingSearch}
            onChange={e => setPendingSearch(e.target.value)}
            sx={{ minWidth: 220, flex: 1, direction: 'rtl' }}
            inputProps={{ style: { direction: 'rtl' } }}
          />
          {/* إضافة قائمة منسدلة لاختيار نوع البحث */}
          <FormControl sx={{ minWidth: 140, mr: 1 }}>
            <InputLabel id="search-type-label">نوع البحث</InputLabel>
            <Select
              labelId="search-type-label"
              id="search-type-select"
              value={searchType}
              label="نوع البحث"
              onChange={e => setSearchType(e.target.value)}
            >
              <MenuItem value="title">عنوان الرسالة</MenuItem>
              <MenuItem value="author">اسم الباحث</MenuItem>
            </Select>
          </FormControl>
        </Box>



        {/* السطر الثاني: الفلاتر المنسدلة */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
          <Autocomplete
            options={universities}
            getOptionLabel={option => (typeof option === 'string' ? option : option?.name || '')}
            value={universities.find(u => u.id === pendingUniversity?.id) || null}
            onChange={(_, value) => setPendingUniversity(value)}
            renderInput={params => <TextField {...params} label="الجامعة" variant="outlined" />}
            sx={{ minWidth: 180, flex: 1 }}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
          />
          <Autocomplete
            options={specializations}
            getOptionLabel={option => (typeof option === 'string' ? option : option?.name || '')}
            value={specializations.find(s => s.id === pendingSpecialization?.id) || null}
            onChange={(_, value) => setPendingSpecialization(value)}
            renderInput={params => <TextField {...params} label="التخصص" variant="outlined" />}
            sx={{ minWidth: 180, flex: 1 }}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
          />
          <Autocomplete
            options={degrees}
            getOptionLabel={option => (typeof option === 'string' ? option : option?.name || '')}
            value={degrees.find(d => d.id === pendingDegree?.id) || null}
            onChange={(_, value) => setPendingDegree(value)}
            renderInput={params => <TextField {...params} label="الدرجة العلمية" variant="outlined" />}
            sx={{ minWidth: 180, flex: 1 }}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
          />
        </Box>
        {/* السطر الثالث: أزرار البحث ومسح الفلاتر */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: { xs: 'center', sm: 'flex-end' }, width: '100%' }}>
          <Button
            variant="contained"
            aria-label="بحث"
            sx={{ minWidth: 120, fontWeight: 700, height: 56, alignSelf: 'center',
              color:'white',
              backgroundColor:theme.palette.bg3.main,
              '&:hover':{
                  background:theme.palette.bg3.sec,
                  }
             }}
            onClick={handleSearch}
            disabled={!isSearchEnabled}
          >
            بحث
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            aria-label="مسح الفلاتر"
            sx={{ minWidth: 120, fontWeight: 700, height: 56, alignSelf: 'center' }}
            onClick={handleClear}
          >
            مسح الفلاتر
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3} id="results-section">
        {loading ? (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary">جاري تحميل البيانات...</Typography>
          </Grid>
        ) : error ? (
          <Grid item xs={12}>
            <Box sx={{ p: 3, textAlign: 'center', color: 'error.main', background: (theme) => theme.palette.mode === 'light' ? alpha(theme.palette.error.main, 0.1) : alpha(theme.palette.error.dark, 0.2), borderRadius: 2, border: '1px solid', borderColor: 'error.main', fontWeight: 700 }}>
              <Typography align="center" color="error.main" sx={{ fontWeight: 700, fontSize: 18 }}>{error}</Typography>
              <Typography align="center" color="text.secondary" sx={{ mt: 1, fontSize: 15 }}>
                تأكد من اتصالك بالإنترنت أو أعد المحاولة لاحقاً.
              </Typography>
            </Box>
          </Grid>
        ) : results.length === 0 ? (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary">
              لا توجد نتائج مطابقة.
            </Typography>
          </Grid>
        ) : (
          <>
            {isSearchMode && (
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'right', fontWeight: 600, color: theme.palette.primary.main }}>
                  تم العثور على 
                  <span style={{ backgroundColor: '#33d13df9', padding: '4px 7px', borderRadius: '5px', border:'1px solid yellow', color:'#fff'}}>
                    {pagination ? pagination.total : results.length}
                  </span> نتيجة
                  {pagination && pagination.last_page > 1 && (
                    <span style={{ marginRight: '10px', fontSize: '14px', color: '#666' }}>
                      (الصفحة {pagination.current_page} من {pagination.last_page})
                    </span>
                  )}
                </Typography>
              </Grid>
            )}
            {results.map((item, idx) => (
            <Grid item xs={12} md={6} key={item.id || idx}>
              <Box
                sx={{
                  ...theme.card2,
                  p: 2.5,
                  mb: 2,
                  direction: 'rtl',
                  textAlign: 'right',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  alignItems: 'flex-end',
                  minHeight: 180,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, mb: 1, textAlign: 'right', fontSize: { xs: 16, md: 18 }, display: 'flex', alignItems: 'center', gap: 1, direction: 'rtl',textAlign: 'end' }}>
                  <BookOutlinedIcon sx={{ ml: 1, color: 'primary.main' }} />
                  {item.title}
                </Typography>
                <Box sx={{ borderTop: '1px solid', borderColor: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.divider, width: '100%', mb: 2 }} />
                <Grid container spacing={2} alignItems="center" direction="row-reverse">
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexDirection: 'row-reverse', background: (theme) => theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper, borderRadius: 2, p: 1, border: (theme) => theme.palette.mode === 'light' ? `1px solid ${theme.palette.divider}` : `1px solid ${theme.palette.divider}`, fontSize: 15, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, direction: 'rtl', textAlign: 'right' }}>
                      <PersonOutlineIcon sx={{ color: 'primary.main', ml: 1 }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.author || ''}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexDirection: 'row-reverse', background: (theme) => theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper, borderRadius: 2, p: 1, border: (theme) => theme.palette.mode === 'light' ? `1px solid ${theme.palette.divider}` : `1px solid ${theme.palette.divider}`, fontSize: 15, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, direction: 'rtl', textAlign: 'right' }}>
                      <AccountBalanceOutlinedIcon sx={{ color: 'primary.main', ml: 1 }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.university || ''}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexDirection: 'row-reverse', background: (theme) => theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper, borderRadius: 2, p: 1, border: (theme) => theme.palette.mode === 'light' ? `1px solid ${theme.palette.divider}` : `1px solid ${theme.palette.divider}`, fontSize: 15, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, direction: 'rtl', textAlign: 'right' }}>
                      <CalendarMonthOutlinedIcon sx={{ color: 'primary.main', ml: 1 }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.year ? item.year.split('/').pop() : ''}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexDirection: 'row-reverse', background: (theme) => theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper, borderRadius: 2, p: 1, border: (theme) => theme.palette.mode === 'light' ? `1px solid ${theme.palette.divider}` : `1px solid ${theme.palette.divider}`, fontSize: 15, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, direction: 'rtl', textAlign: 'right' }}>
                      <SchoolOutlinedIcon sx={{ color: 'primary.main', ml: 1 }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.degree || ''}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexDirection: 'row-reverse', background: (theme) => theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper, borderRadius: 2, p: 1, border: (theme) => theme.palette.mode === 'light' ? `1px solid ${theme.palette.divider}` : `1px solid ${theme.palette.divider}`, fontSize: 15, color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.common.white, direction: 'rtl', textAlign: 'right' }}>
                      <BusinessCenterOutlinedIcon sx={{ color: 'primary.main', ml: 1 }} />
                      <Typography sx={{ fontWeight: 500 }}>{item.specialization || ''}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      aria-label="اطلع على الرسالة"
                      sx={{
                        background:theme.palette.bg3.main,
                        fontSize: 13,
                        borderRadius: 2,
                        minWidth: 100,
                        color: 'white',
                        mt: 1,
                        px: 3,
                        py: 1.2,
                        boxShadow: 'none',
                        direction: 'rtl',
                        textAlign: 'right',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        '&:hover':{
                        background:theme.palette.bg3.sec,
                        }
                      }}
                      href={
                        item.pdf_path
                          ? (item.pdf_path.startsWith('http')
                              ? item.pdf_path
                              : `${API_BASE_URL.replace(/\/api$/, '')}${item.pdf_path}`)
                          : undefined
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={!item.pdf_path}
                    >
                      <VisibilityOutlinedIcon sx={{ mr: 2 }} />
                      اطلع على الرسالة
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
          </>
        )}
      </Grid>
      
      {/* أزرار التنقل بين الصفحات */}
      {pagination && pagination.last_page > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
          <Button 
            variant="contained"
            aria-label="السابق"
            disabled={currentPage === 1} 
            onClick={() => {
              const newPage = currentPage - 1;
              setCurrentPage(newPage);
              performSearch(newPage, true);
              scrollToResults();
            }}
            sx={{ 
              mx: 1, 
              backgroundColor: theme.palette.bg3.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.bg3.sec
              },
              '&:disabled': {
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.grey[500]
              }
            }}
          >
            السابق
          </Button>
          <Typography sx={{ mx: 2, alignSelf: 'center', fontWeight: 600 }}>
            {currentPage} من {pagination.last_page}
          </Typography>
          <Button 
            variant="contained"
            aria-label="التالي"
            disabled={currentPage === pagination.last_page} 
            onClick={() => {
              const newPage = currentPage + 1;
              setCurrentPage(newPage);
              performSearch(newPage, true);
              scrollToResults();
            }}
            sx={{ 
              mx: 1,
              backgroundColor: theme.palette.bg3.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.bg3.sec
              },
              '&:disabled': {
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.grey[500]
              }
            }}
          >
            التالي
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default LibraryPage;
