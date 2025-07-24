import { API_BASE_URL, endpoints } from './config';

// دالة مساعدة للطلبات
const fetchWithBaseUrl = async (endpoint, options = {}) => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`خطأ في الطلب: ${response.status}`);
  }

  return response.json();
};

// مثال لدوال API
export const apiService = {
  // طلب GET
  get: (endpoint, options = {}) => {
    return fetchWithBaseUrl(endpoint, {
      method: 'GET',
      ...options,
    });
  },

  // طلب POST
  post: (endpoint, data, options = {}) => {
    return fetchWithBaseUrl(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  },

  // طلب PUT
  put: (endpoint, data, options = {}) => {
    return fetchWithBaseUrl(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  },

  // طلب DELETE
  delete: (endpoint, options = {}) => {
    return fetchWithBaseUrl(endpoint, {
      method: 'DELETE',
      ...options,
    });
  },
};

// مثال لاستخدام النقاط النهائية
export const authAPI = {
  login: (credentials) => apiService.post(endpoints.login, credentials),
  register: (userData) => apiService.post(endpoints.register, userData),
  getProfile: () => apiService.get(endpoints.profile),
};