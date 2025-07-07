import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedProduct } from '../types';

const ProductsPreview = () => {
  const featuredProducts: FeaturedProduct[] = [
    {
      name: "Lime Plaster",
      description: "Natural, breathable finishing solution that improves with age.",
      image: "/lime.jpg"
    },
    {
      name: "Wall Texture/Rustic",
      description: "Add unique character to your walls with our textured solutions.",
      image: "/lime.jpg"
    },
    {
      name: "Heritage/Aarish Plaster",
      description: "Traditional techniques for premium heritage finishes.",
      image: "/aarish.png"
    }
  ];

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">OUR PRODUCTS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our premium lime-based products that offer superior durability and aesthetic appeal
            while maintaining breathable, natural properties.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product: FeaturedProduct, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-60">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href="/products" className="text-orange-600 font-medium inline-flex items-center">
                  Learn more
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-block bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-700 transition"
          >
            View All Products
          </Link>
        </div>
        
        <div className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-orange-800 mb-4">Professional Application Services</h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Professional lime plastering services available with experienced craftsmen at reasonable rates.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
