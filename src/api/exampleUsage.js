import { apiService, authAPI } from './apiService';
import { endpoints } from './config';

// مثال لاستخدام خدمة API مباشرة
export const fetchUserData = async (userId) => {
  try {
    const userData = await apiService.get(`/users/${userId}`);
    return userData;
  } catch (error) {
    console.error('خطأ في جلب بيانات المستخدم:', error);
    throw error;
  }
};

// مثال لاستخدام دوال API المعرفة مسبقًا
export const loginUser = async (email, password) => {
  try {
    const response = await authAPI.login({ email, password });
    return response;
  } catch (error) {
    console.error('خطأ في تسجيل الدخول:', error);
    throw error;
  }
};

// مثال لاستخدام النقاط النهائية مباشرة
export const registerUser = async (userData) => {
  try {
    const response = await apiService.post(endpoints.register, userData);
    return response;
  } catch (error) {
    console.error('خطأ في تسجيل المستخدم:', error);
    throw error;
  }
};