'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Slide captions for each image
  const slideContent = [
    {
      title: "Premium Lime Plaster Solutions",
      description: "Transforming spaces with natural, sustainable lime-based solutions since 2007"
    },
    {
      title: "Eco-Friendly Building Materials",
      description: "Natural, breathable finishes that improve with age"
    },
    {
      title: "Heritage & Traditional Techniques",
      description: "Reviving historic craftsmanship with modern applications"
    },
    {
      title: "Professional Plastering Services",
      description: "Expert application by skilled craftsmen for perfect results"
    },
    {
      title: "Create Timeless Beauty",
      description: "Transform your walls with textures that tell a story"
    }
  ];

  return (
    <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4 mt-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {slideContent[index].title}
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {slideContent[index].description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
