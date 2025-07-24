// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/v1_assets/banner/banner-1-Photoroom (1).webp',
    '/v1_assets/banner/banner-2-Photoroom.webp'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Initialize preloading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preloadCriticalResources);
} else {
  preloadCriticalResources();
}