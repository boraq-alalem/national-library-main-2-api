// تكوين الـ API الأساسي
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://alalem.c-library.org/api';

// استخراج الدومين الأساسي (بدون /api)
export const BASE_DOMAIN = API_BASE_URL.split('/api')[0];

// النقاط النهائية للـ API
export const endpoints = {
  // الرسائل
  latestTheses: `${API_BASE_URL}/theses/latest-guests`,
  searchTheses: `${API_BASE_URL}/theses/search-guests`,
  
  // البيانات الأساسية
  universities: `${API_BASE_URL}/universities`,
  specializations: `${API_BASE_URL}/specializations`,
  degrees: `${API_BASE_URL}/degrees`,
  
  // البحث الأكاديمي
  reservedThesisTitles: `${API_BASE_URL}/reserved-thesis-titles-search-guests`,
};