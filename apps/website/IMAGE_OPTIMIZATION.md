# Image Optimization Guide for NCRST Website

## Current Issues
Several images in the assets folder are extremely large (10MB+) which significantly impacts page load performance:

### Large Images Identified:
- `standard-quality-control-concept-m.jpg` (10MB)
- `microscope-dna.jpg` (11MB)
- `man-wearing-smart-glasses-touching-holographic-screen.jpg` (17MB)
- `scientists-look-sky-blue-chemicals-glass-laboratory (1).jpg` (11MB)
- `ai-nuclear-energy-future-innovation-disruptive-technology.jpg` (12MB)
- `engineer-wearing-vr-headset-data-center-installing-software.jpg` (15MB)

## Optimization Strategies Implemented

### 1. Lazy Loading
- All images now use lazy loading with Intersection Observer
- Images only load when they're about to enter the viewport
- Reduces initial page load time significantly

### 2. Progressive Loading
- Images show a placeholder while loading
- Smooth fade-in transition when loaded
- Error handling with fallback UI

### 3. Responsive Images
- Support for different screen sizes
- Optimized for mobile, tablet, and desktop
- Proper `sizes` attribute for responsive behavior

### 4. Critical Image Preloading
- Critical images (home carousel, logos) are preloaded
- Improves perceived performance for key content

## Recommended Image Sizes

### Banner Images (Hero Sections)
- **Desktop**: 1920x1080px (max 500KB)
- **Tablet**: 1200x675px (max 300KB)
- **Mobile**: 800x450px (max 200KB)

### Content Images
- **Large**: 800x600px (max 200KB)
- **Medium**: 600x450px (max 150KB)
- **Small**: 400x300px (max 100KB)

### Thumbnails
- **Square**: 300x300px (max 50KB)
- **Rectangle**: 400x250px (max 60KB)

## Image Format Recommendations

### WebP (Preferred)
- Best compression for web
- 25-35% smaller than JPEG
- Modern browser support

### JPEG
- Good for photographs
- Use quality 80-85%
- Progressive JPEG for better perceived loading

### PNG
- Use only for images requiring transparency
- Consider converting to WebP with transparency

## Tools for Image Optimization

### Online Tools
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim**: https://imageoptim.com/

### Command Line Tools
```bash
# Using ImageMagick
convert input.jpg -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Using cwebp (WebP conversion)
cwebp -q 85 input.jpg -o output.webp
```

## Implementation Steps

### 1. Optimize Existing Images
```bash
# Example optimization script
for file in *.jpg; do
  convert "$file" -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 "optimized_$file"
done
```

### 2. Generate Multiple Sizes
Create responsive image sets:
- `image-large.jpg` (1920px)
- `image-medium.jpg` (1200px)
- `image-small.jpg` (800px)

### 3. Update Component Usage
```tsx
// Use OptimizedImage component
<OptimizedImage
  src={imageSrc}
  alt="Description"
  className="w-full h-full object-cover"
  priority={isCritical}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Performance Monitoring

### Key Metrics to Track
- **Largest Contentful Paint (LCP)**: Should be < 2.5s
- **Cumulative Layout Shift (CLS)**: Should be < 0.1
- **First Input Delay (FID)**: Should be < 100ms

### Tools
- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

## Next Steps

1. **Optimize all images > 1MB** to under 500KB
2. **Convert to WebP format** where possible
3. **Implement responsive image sets** for critical images
4. **Add image compression to build process**
5. **Monitor performance metrics** after optimization

## File Size Targets

| Image Type | Target Size | Max Size |
|------------|-------------|----------|
| Hero/Banner | 200-300KB | 500KB |
| Content | 100-200KB | 300KB |
| Thumbnail | 30-80KB | 100KB |
| Logo | 20-50KB | 80KB |

## Browser Support

### WebP Support
- Chrome: 23+
- Firefox: 65+
- Safari: 14+
- Edge: 18+

### Fallback Strategy
```tsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

## Maintenance

- **Regular audits**: Check image sizes monthly
- **Automated optimization**: Add to CI/CD pipeline
- **Performance monitoring**: Track Core Web Vitals
- **User feedback**: Monitor loading complaints
