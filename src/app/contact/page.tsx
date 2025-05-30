import React from 'react';
import Image from 'next/image';
import ContactSection from '../../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[450px]">
        <Image 
          src="/image.jpg" 
          alt="Contact Us" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16">Contact Us</h1>
        </div>
      </div>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;