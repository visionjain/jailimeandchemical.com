import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    "Good Infrastructure Facilities.",
    "Ethical Business Practices.",
    "Transparent Dealings.",
    "Timely Delivery.",
    "Experienced Team of Professionals.",
    "Pioneers in the Industry with product usage and service of about 17 years.",
    "Registered Manufacturers, Dealers & with Licenses and Government Approvals & Certifications."
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Why Choose Us</h2>
          <p className="text-gray-600">
            We have marked a Distinct & Vibrant Position in the Industry by Providing a Range of High Quality Products. Our advantages include:
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="ml-4 text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-orange-800 text-center mb-6">Quality Standards</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-lg font-medium text-orange-700 mb-3">Design Without Limits</h4>
              <p className="text-gray-600">
                Our lime plaster products allow for unlimited design possibilities, enabling you to create unique textured finishes.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-orange-700 mb-3">Our Dream Space</h4>
              <p className="text-gray-600">
                We help you transform ordinary spaces into extraordinary environments that reflect your style and personality.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-orange-700 mb-3">Our Expert Touch</h4>
              <p className="text-gray-600">
                With our experienced team, every application is performed with precision and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
