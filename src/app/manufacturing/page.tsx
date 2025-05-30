import React from 'react';
import Image from 'next/image';

const ManufacturingPage = () => {
  const facilities = [
    {
      title: "Modern Equipment",
      description: "We utilize state-of-the-art machinery and equipment to ensure precision and quality in our manufacturing process.",
      icon: "cog"
    },
    {
      title: "Quality Control",
      description: "Rigorous quality testing at every step ensures our products meet the highest standards before reaching our customers.",
      icon: "check"
    },
    {
      title: "Research & Development",
      description: "Our dedicated R&D team constantly works on improving formulations and developing innovative products.",
      icon: "beaker"
    },
    {
      title: "Safety Standards",
      description: "We maintain strict safety protocols throughout our manufacturing facility to protect both our workers and the environment.",
      icon: "shield"
    },
    {
      title: "Sustainable Practices",
      description: "Our manufacturing processes are designed to minimize environmental impact and promote sustainability.",
      icon: "leaf"
    },
    {
      title: "Storage Facilities",
      description: "Climate-controlled storage areas ensure our materials maintain their quality before being shipped to customers.",
      icon: "warehouse"
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px]">
        <Image 
          src="/image.jpg" 
          alt="Manufacturing Facility" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16">Manufacturing Unit</h1>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-800 mb-6">State-of-the-Art Facility</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our manufacturing unit is equipped with advanced machinery and technology to produce high-quality lime-based products.
                We adhere to strict quality control measures to ensure that every product meets our high standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From raw material processing to final packaging, our facility is designed to optimize efficiency and maintain the integrity of our products.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/lime.jpg" 
                alt="Manufacturing Facility" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Manufacturing Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">Our Manufacturing Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our manufacturing process is designed to ensure the highest quality and consistency in our lime-based products.
              Here are the key steps involved:
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pr-12">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">Raw Material Selection</h3>
                    <p className="text-gray-600">
                      We carefully select the finest raw materials to ensure the quality and performance of our products.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src="/lime.jpg" 
                        alt="Raw Materials" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">Processing and Mixing</h3>
                    <p className="text-gray-600">
                      Our advanced machinery ensures precise processing and mixing of raw materials to achieve the desired consistency and quality.
                    </p>
                  </div>
                  <div className="md:order-1 md:pr-12">
                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src="/lime.jpg" 
                        alt="Processing and Mixing" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pr-12">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">Quality Control</h3>
                    <p className="text-gray-600">
                      Every batch undergoes rigorous quality control checks to ensure it meets our high standards.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src="/lime.jpg" 
                        alt="Quality Control" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">Packaging and Distribution</h3>
                    <p className="text-gray-600">
                      Our products are carefully packaged and distributed to ensure they reach our customers in perfect condition.
                    </p>
                  </div>
                  <div className="md:order-1 md:pr-12">
                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src="/lime.jpg" 
                        alt="Packaging and Distribution" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">Our Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our manufacturing unit is equipped with modern facilities to ensure high-quality production.
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl font-semibold">{facility.icon.charAt(0).toUpperCase()}</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;