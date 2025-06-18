import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import AboutSection from '../../components/AboutSection';
import FeaturesSection from '../../components/FeaturesSection';
import ProductsPreview from '../../components/ProductsPreview';
import WhyChooseUs from '../../components/WhyChooseUs';
import ProcessSection from '../../components/ProcessSection';
import ContactSection from '../../components/ContactSection';

const HomePage = () => {
  // Updated slider images array with all 5 images
  const sliderImages = [
    '/image.jpg',    // Original image
    '/slider1.png',  // New slider image 1
    '/slider2.png',  // New slider image 2
    '/slider3.png',  // New slider image 3
    '/slider4.png',  // New slider image 4
  ];

  return (
    <div className="pt-0">
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