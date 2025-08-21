import DOMPurify from 'dompurify';

// تنظيف HTML من المحتوى الضار
export const sanitizeHtml = (html) => {
  if (!html) return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'span', 'div'],
    ALLOWED_ATTR: ['class', 'style']
  });
};

// تنظيف النصوص العادية
export const sanitizeText = (text) => {
  if (!text) return '';
  return text.replace(/[<>]/g, '');
};

// تنظيف URLs
export const sanitizeUrl = (url) => {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol) ? url : '';
  } catch {
    return '';
  }
};