import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">THE COMPANY</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jai Lime & Chemical is a reputable firm in Udaipur, India, specializing in lime-based finishing plaster solutions. 
              Established in 2007, we have over 17 years of experience in the industry, making us a trusted name in the market.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We deliver lime-based finishing plaster solutions that are multiple times more durable, 
              return more than double the investment value, and are infinitely healthier and environment-friendly 
              as compared to acrylic paints and other conventional options.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our lime products create a natural, textured finish on your walls. It resists mould, absorbs humidity 
              and improves air quality. Our materials are natural, and time only enhances their aesthetic and functional appeal.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/lime.jpg" 
              alt="Jai Lime & Chemical" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">OUR VISION</h3>
              <p className="text-gray-600">
                Our Vision is to provide quality lime-based solutions that transform spaces while conserving the environment for future generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">OUR MISSION</h3>
              <p className="text-gray-600">
                Our Mission is to exceed customer expectations, enable long-term partnerships, and create spaces that enlighten and are long-lasting.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">OUR APPROACH</h3>
              <p className="text-gray-600">
                We combine traditional craftsmanship with modern techniques to deliver sustainable, high-quality lime solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
