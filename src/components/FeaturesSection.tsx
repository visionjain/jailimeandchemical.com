import React from 'react';

const FeaturesSection = () => {
  const features = [
    { 
      icon: "chat", 
      title: "100% SATISFACTION", 
      description: "We ensure complete satisfaction with our premium lime plaster products and expert services." 
    },
    { 
      icon: "leaves", 
      title: "ECO FRIENDLY", 
      description: "Our lime-based products are natural and environmentally sustainable." 
    },
    { 
      icon: "get-money", 
      title: "POCKET FRIENDLY", 
      description: "Quality solutions that provide excellent value for your investment." 
    },
    { 
      icon: "water", 
      title: "SUSTAINABLE", 
      description: "Products that last longer and improve with age, reducing the need for replacements." 
    },
    { 
      icon: "plastering", 
      title: "DURABLE", 
      description: "Our lime plasters are designed to withstand the test of time." 
    },
    { 
      icon: "waterdrop", 
      title: "MOISTURE, WATER & STAIN RESISTANT", 
      description: "Protection against moisture, water damage, and staining." 
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Key Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            यह प्राकृतिक खनिज द्वारा निर्मित एक उत्कृष्ट उत्पाद है, जो कि भवन / ईमारत की दीवारों में सीमेन्ट प्लास्टर पर लगाया जाता है।
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-semibold">{feature.icon.charAt(0).toUpperCase()}</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-orange-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-orange-800 text-center mb-6">Additional Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">भवन को संगमरमर जैसा निखारे और देता है शाही अन्दाज।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% प्राईमर व 30% कलर लागत की बचत।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">कम लागत व समय की बचत।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% संतुष्टि का अहसास।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">गर्मीरोधक व किफायती।</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">दीवारों पर मजबूत पकड़ एवं चिकनापन।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">बिजली के भारी खर्च में बचत।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">लम्बे समय तक सफेदी व चमक बरकरार।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">पर्यावरण मैत्रीपूर्ण उत्पाद जो आपके परिवार को भी रखें सुरक्षित।</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-orange-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">बदलते मौसम की मार से भवन को सुरक्षित बनाए रखना।</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
