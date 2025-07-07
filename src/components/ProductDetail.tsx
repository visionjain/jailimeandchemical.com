'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';

type ProductDetailProps = {
  product: Product;
  onClose: () => void;
};

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxOpen, onClose]);

  // Stop event propagation for modal content
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Handle image navigation
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.gallery.length);
  };
  
  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={handleContentClick}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors z-10"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Left side - Product info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-800 border-b border-orange-200 pb-3">
              {product.name}
            </h2>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.longDescription}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition"
              >
                <span>Request a Quote</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right side - Gallery */}
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Gallery</h3>
            
            {/* Main selected image */}
            <div 
              className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <Image 
                src={product.gallery[selectedImage]} 
                alt={`${product.name} - Image ${selectedImage + 1}`} 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-3">
                  <svg className="w-6 h-6 text-orange-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Thumbnail grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {product.gallery.map((image: string, index: number) => (
                <div 
                  key={index} 
                  className={`relative aspect-square cursor-pointer rounded-md overflow-hidden ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10"
            onClick={() => setLightboxOpen(false)}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-10"
            onClick={prevImage}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-10"
            onClick={nextImage}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] mx-4">
            <Image 
              src={product.gallery[selectedImage]} 
              alt={`${product.name} - Image ${selectedImage + 1}`} 
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              Image {selectedImage + 1} of {product.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
