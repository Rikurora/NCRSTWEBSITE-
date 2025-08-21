import React, { useState, useEffect } from 'react';

interface CarouselImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  position = 'center 25%',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Preload the image
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setHasError(true);
    };
    
    img.src = src;
  }, [src]);

  if (hasError) {
    return (
      <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
        <div className="text-center text-white">
          <div className="text-4xl mb-2">🖼️</div>
          <p className="text-sm">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          objectPosition: position
        }}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default CarouselImage;
