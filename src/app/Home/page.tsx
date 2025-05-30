import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import AboutSection from '../../components/AboutSection';
import FeaturesSection from '../../components/FeaturesSection';
import ProductsPreview from '../../components/ProductsPreview';
import WhyChooseUs from '../../components/WhyChooseUs';
import ProcessSection from '../../components/ProcessSection';
import ContactSection from '../../components/ContactSection';

const HomePage = () => {
  // Make sure these image paths are correct
  const sliderImages = [
    '/image.jpg', // This should exist in public/image.jpg
    '/image.jpg',
    '/image.jpg',
    '/image.jpg',
  ];

  return (
    <div className="pt-0"> {/* Removed top padding */}
      <ImageSlider images={sliderImages} />
      <AboutSection />
      <FeaturesSection />
      <ProductsPreview />
      <WhyChooseUs />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;