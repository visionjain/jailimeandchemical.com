import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPreview = () => {
  const products = [
    {
      name: "Lime Plaster",
      image: "/lime.jpg",
      description: "Our premium lime plaster provides a natural, breathable finish that improves with age."
    },
    {
      name: "Wall Texture/Rustic",
      image: "/lime.jpg",
      description: "Create unique wall finishes with our textured wall solutions that add character to any space."
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Our Products</h2>
          <p className="text-gray-600">
            लाइम (प्लास्टर) का कार्य अनुभवी कारीगरों द्वारा उचित दर पर करवाने की सुविधा उपलब्ध।
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
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
                <Link 
                  href="/products" 
                  className="inline-block bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/products" 
            className="inline-block bg-orange-700 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-800 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
