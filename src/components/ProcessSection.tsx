import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Request",
      subtitle: "Service or Consultation",
      description: "Get in touch with us through our website, phone, or in person."
    },
    {
      number: "02",
      title: "Product",
      subtitle: "Selection or Service Booking",
      description: "Select the appropriate lime products or book our plastering services."
    },
    {
      number: "03",
      title: "Delivery",
      subtitle: "or On-site Service",
      description: "We offer delivery or on-site plastering services by skilled professionals."
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">3 EASY STEPS</span>
          <h2 className="text-3xl font-bold text-orange-800 mt-2 mb-4">Our Work Process</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md h-full flex flex-col">
                <div className="bg-orange-100 text-orange-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-1">{step.title}</h3>
                <h4 className="text-lg font-medium text-gray-600 mb-4">{step.subtitle}</h4>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
