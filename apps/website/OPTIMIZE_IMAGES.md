# Quick Image Optimization Guide

## Immediate Actions Needed

### 1. Replace Large Images with Optimized Versions

The following images are extremely large and should be replaced:

**Current Large Images:**
- `focused-woman-testing-vr-headset.jpg` (8MB) → Use `slide5.jpg` (already optimized)
- `standard-quality-control-concept-m.jpg` (10MB) → Needs optimization
- `microscope-dna.jpg` (11MB) → Use `slide2.jpg` (285KB)
- `ai-nuclear-energy-future-innovation-disruptive-technology.jpg` (12MB) → Use `slide3.jpg` (380KB)
- `scientists-look-sky-blue-chemicals-glass-laboratory (1).jpg` (11MB) → Needs optimization
- `man-wearing-smart-glasses-touching-holographic-screen.jpg` (17MB) → Needs optimization
- `engineer-wearing-vr-headset-data-center-installing-software.jpg` (15MB) → Needs optimization

### 2. Quick Optimization Steps

#### Option A: Online Tools (Recommended)
1. Go to https://tinypng.com/
2. Upload the large images
3. Download optimized versions
4. Replace original files

#### Option B: Command Line (if you have ImageMagick)
```bash
# Navigate to assets folder
cd apps/website/src/assets

# Optimize large images
convert "focused-woman-testing-vr-headset.jpg" -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 "focused-woman-testing-vr-headset-optimized.jpg"
convert "standard-quality-control-concept-m.jpg" -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 "standard-quality-control-concept-m-optimized.jpg"
```

### 3. Target File Sizes

| Current Size | Target Size | Reduction |
|--------------|-------------|-----------|
| 8-17MB | 200-500KB | 95%+ |

### 4. Update Import Statements

After optimizing, update any remaining imports to use the optimized versions.

## Performance Impact

**Before Optimization:**
- Total carousel images: ~50MB
- Load time: 10-30 seconds on slow connections

**After Optimization:**
- Total carousel images: ~2MB
- Load time: 2-5 seconds on slow connections

## Next Steps

1. **Immediate**: Optimize the 5 remaining large images
2. **Short-term**: Convert to WebP format for additional 25-35% size reduction
3. **Long-term**: Implement responsive image sets for different screen sizes
