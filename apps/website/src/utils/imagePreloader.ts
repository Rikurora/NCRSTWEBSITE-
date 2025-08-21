// Image preloader utility for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map(url => preloadImage(url));
  await Promise.allSettled(promises);
};

// Critical images that should be preloaded
export const criticalImages = [
  // Home page carousel images - using available optimized versions
  '/src/assets/slide1.jpg', // 434KB
  '/src/assets/slide2.jpg', // 285KB  
  '/src/assets/slide3.jpg', // 380KB
  '/src/assets/ai-chip-artificial-intelligence-future-technology-innovation.jpg', // 2.6MB
  '/src/assets/focused-woman-testing-vr-headset.jpg', // 8MB (needs optimization)
  
  // Logo images
  '/src/assets/NCRST Logo _Colour Horizontal.png',
  '/src/assets/NCRST Logo _Horizontal colour white.png',
];

// Initialize preloading of critical images
export const initializeImagePreloading = () => {
  // Preload critical images immediately
  if (typeof window !== 'undefined') {
    // Start preloading immediately
    preloadImages(criticalImages).catch(console.error);
    
    // Also preload after page load for any missed images
    window.addEventListener('load', () => {
      preloadImages(criticalImages).catch(console.error);
    });
  }
};
