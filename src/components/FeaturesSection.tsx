'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Enhanced features data with custom gradient colors
  const features = [
    {
      title: "Eco-Friendly Materials",
      description: "Our lime-based products are natural, non-toxic, and contribute to better indoor air quality for healthier living spaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-green-600",
      animation: "fade-right",
      bgImage: "/leaf-pattern.png"
    },
    {
      title: "Superior Durability",
      description: "Our lime finishes strengthen over time, creating surfaces that last for decades with minimal maintenance required.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600",
      animation: "fade-up",
      bgImage: "/shield-pattern.png"
    },
    {
      title: "Breathable Walls",
      description: "Our lime plasters regulate moisture, preventing mold and mildew growth while maintaining balanced humidity levels.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: "from-sky-500 to-cyan-600",
      animation: "fade-left",
      bgImage: "/wave-pattern.png"
    },
    {
      title: "Authentic Aesthetics",
      description: "Create stunning visual textures with our lime finishes that add depth, character and timeless elegance to any space.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-600",
      animation: "fade-right",
      bgImage: "/paint-pattern.png"
    },
    {
      title: "Temperature Regulation",
      description: "Natural lime products help regulate indoor temperatures, keeping spaces cooler in summer and warmer in winter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
      gradient: "from-red-500 to-rose-600",
      animation: "fade-up",
      bgImage: "/thermometer-pattern.png"
    },
    {
      title: "Professional Application",
      description: "Our team of skilled craftsmen ensures flawless application with attention to detail for perfect finished surfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-violet-600",
      animation: "fade-left",
      bgImage: "/gear-pattern.png"
    }
  ];

  // Add animation when cards come into view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Add CSS for enhanced animations
  useEffect(() => {
    if (!document.getElementById('fancy-features-styles')) {
      const style = document.createElement('style');
      style.id = 'fancy-features-styles';
      style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-50px) rotate(-3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(50px) rotate(3deg); }
          to { opacity: 1; transform: translateX(0) rotate(0); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(249, 115, 22, 0); }
          100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
        }
        
        .fancy-feature-card {
          opacity: 0;
          transition: all 0.4s ease-out;
          will-change: transform;
          background-size: 200% 100%;
          background-position: right bottom;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .fancy-feature-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08);
          z-index: 10;
        }
        
        .fancy-feature-card:hover .icon-container {
          animation: pulse 1.5s infinite;
        }
        
        .fancy-feature-card:hover .feature-title {
          transform: translateY(-3px);
        }
        
        .fancy-feature-card .bg-pattern {
          opacity: 0.07;
          transition: opacity 0.3s ease, transform 0.5s ease;
        }
        
        .fancy-feature-card:hover .bg-pattern {
          opacity: 0.12;
          transform: scale(1);
        }
        
        .feature-animate.fade-right {
          animation: fadeRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .feature-animate.fade-left {
          animation: fadeLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .feature-animate.fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .animate-delay-4 { animation-delay: 0.4s; }
        .animate-delay-5 { animation-delay: 0.5s; }
        .animate-delay-6 { animation-delay: 0.6s; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Animated section title component
  const AnimatedSectionTitle = () => (
    <div className="text-center mb-16">
      <div className="relative inline-block">
        <h2 className="text-4xl font-bold text-orange-800 mb-2 relative z-10">
          WHY CHOOSE OUR PRODUCTS
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-100 -z-10 transform -rotate-1"></div>
        </h2>
      </div>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
        Discover the unique advantages that make our lime-based products the preferred choice for sustainable, 
        beautiful, and healthy living spaces.
      </p>
      <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mt-6 rounded-full"></div>
    </div>
  );

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSectionTitle />
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`fancy-feature-card bg-white p-8 rounded-2xl overflow-hidden relative z-0 ${
                inView ? `feature-animate ${feature.animation} animate-delay-${index + 1}` : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-pattern opacity-5 z-0">
                {/* This would be where your pattern images go */}
                {/* For now using a gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-30"></div>
              </div>
              
              {/* Icon with gradient background */}
              <div 
                className={`icon-container relative w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white transition-all duration-300 bg-gradient-to-r ${feature.gradient}`}
              >
                <div className="absolute inset-0 bg-black opacity-10 rounded-full"></div>
                <div className="relative z-10">
                  {feature.icon}
                </div>
                <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-r ${feature.gradient} opacity-30 blur-sm transition-opacity ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              {/* Title with animated transition */}
              <h3 className="feature-title text-2xl font-bold text-orange-800 mb-4 transition-transform duration-300 relative">
                {feature.title}
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                    hoveredIndex === index ? 'w-full' : 'w-1/3'
                  }`}
                ></div>
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div 
                  className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${feature.gradient} transform rotate-45 translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-80' : 'opacity-50'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
