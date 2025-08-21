// Authentication and authorization utilities

// Generate CSRF token
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Validate CSRF token
export const validateCSRFToken = (token) => {
  if (!token || typeof token !== 'string') return false;
  return token.length > 10; // Basic validation
};

// Check if user has required permissions
export const hasPermission = (userRole, requiredRole) => {
  const roles = ['guest', 'user', 'admin', 'super_admin'];
  const userIndex = roles.indexOf(userRole);
  const requiredIndex = roles.indexOf(requiredRole);
  return userIndex >= requiredIndex;
};

// Sanitize user input for logging
export const sanitizeForLog = (input) => {
  if (!input) return '';
  return String(input).replace(/[\r\n\t]/g, ' ').substring(0, 100);
};