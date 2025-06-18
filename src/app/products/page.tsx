import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Lime Plaster",
      description: "Our premium lime plaster provides a natural, breathable finish that improves with age. It's perfect for both interior and exterior walls, offering excellent mold resistance and thermal regulation properties.",
      features: [
        "Natural and breathable",
        "Mold and mildew resistant",
        "Improves indoor air quality",
        "Environmentally friendly",
        "Long-lasting durability"
      ],
      image: "/lime.jpg"
    },
    {
      id: 2,
      name: "Wall Texture/Rustic",
      description: "Create unique wall finishes with our textured wall solutions that add character to any space. Our rustic textures provide depth and personality to your walls with various finish options.",
      features: [
        "Multiple texture options",
        "Customizable finishes",
        "Adds depth and character",
        "Hides wall imperfections",
        "Easy to maintain"
      ],
      image: "/lime.jpg"
    },
    {
      id: 3,
      name: "Water Proofing Solution",
      description: "Our waterproofing solutions provide excellent protection against moisture and water damage, ensuring the longevity of your building structures.",
      features: [
        "Superior water resistance",
        "Prevents seepage and leakage",
        "Long-lasting protection",
        "Can be applied to various surfaces",
        "Environmentally safe formula"
      ],
      image: "/lime.jpg"
    },
    {
      id: 4,
      name: "Heritage/Aarish Plaster Finishes",
      description: "Our heritage and Aarish plaster finishes offer unique aesthetic options that draw from traditional techniques, creating distinctive wall treatments with premium quality.",
      features: [
        "Unique decorative finishes",
        "Premium quality materials",
        "Multiple color options",
        "Suitable for feature walls",
        "Professional application available"
      ],
      image: "/aarish.png" // Updated to use the new aarish.png image
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px]">
        <Image 
          src="/image.jpg" 
          alt="Jai Lime & Chemical Products" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16">Our Products</h1>
        </div>
      </div>
      
      {/* Products Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Premium Lime-Based Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality lime-based products designed to provide durable, 
              eco-friendly solutions for your construction and renovation needs. Our products combine 
              traditional craftsmanship with modern innovation.
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          {/* Product Listing */}
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">{product.name}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">Professional Application</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              लाइम (प्लास्टर) का कार्य अनुभवी कारीगरों द्वारा उचित दर पर करवाने की सुविधा उपलब्ध।
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl font-semibold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Surface Preparation</h3>
              <p className="text-gray-600">
                Our team ensures proper surface preparation, cleaning, and priming before application to ensure optimal adhesion and finish.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl font-semibold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Expert Application</h3>
              <p className="text-gray-600">
                Our skilled craftsmen apply the plaster using traditional techniques combined with modern methods to ensure perfect results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl font-semibold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Finishing & Curing</h3>
              <p className="text-gray-600">
                We ensure proper finishing and curing to bring out the best qualities of our lime-based products for long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your space?</h2>
          <p className="text-lg text-orange-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project needs and discover how our premium lime-based products 
            can enhance your building while providing sustainable, long-lasting solutions.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-orange-700 py-3 px-8 rounded-md text-lg font-medium hover:bg-orange-50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
