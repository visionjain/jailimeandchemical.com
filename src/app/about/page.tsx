import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px]">
        <Image 
          src="/image.jpg" 
          alt="About Jai Lime & Chemical" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16">About Us</h1>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Our Story</h2>
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
                Our products are based on a material that has proven itself in the past 7,500 years.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/lime.jpg" 
                alt="Our Story" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Perfect Finish Section - Adjusted thickness */}
      <section className="relative py-8">
        {/* Background Image without overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/aboutback.jpg" 
            alt="Lime Plastering" 
            fill
            className="object-cover brightness-[0.8]"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-2">
          <h2 className="text-2xl font-bold text-white mb-3">
            A Perfect Finish Every Time
          </h2>
          <p className="text-base text-white/95 leading-relaxed">
            Call us and let&apos;s talk about your project. We love what we do and take pride in doing it the right way. 
            We know it can be difficult getting reliable information and that talking to a professional is the best way to get answers fast.
          </p>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                Our Vision is to provide quality lime-based solutions that transform spaces while conserving the environment for future generations.
                We aim to revive traditional plastering techniques while incorporating modern innovations to create sustainable building solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Our Mission is to exceed customer expectations, enable long-term partnerships, and create spaces that enlighten and are long-lasting.
                We strive to be the leading provider of lime-based solutions in India, known for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We manufacture and supply lime plaster products, but also offer professional plastering services. 
              Our team of professionals is highly skilled and experienced, ensuring that every project is completed with attention to detail.
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering top-notch lime products and plastering services, ensuring superior results every time.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Customization</h3>
              <p className="text-gray-600">
                We understand that every project is unique, which is why we offer custom solutions to meet your specific requirements and preferences.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, and we go above and beyond to exceed your expectations and ensure your complete happiness with our work.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Professionalism</h3>
              <p className="text-gray-600">
                Our team of professionals is dedicated to providing exceptional service, from initial consultation to project completion, ensuring a seamless experience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our commitment to eco-friendliness means our products are designed with environmental sustainability, making them an ideal choice for conscious customers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Experience</h3>
              <p className="text-gray-600">
                With over 17 years in the industry, we bring unmatched experience and expertise to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
