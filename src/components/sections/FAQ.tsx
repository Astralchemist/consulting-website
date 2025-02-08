// filepath: /consulting-website/src/components/sections/Hero.tsx
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        
        {/* FAQ Item 1 */}
        <div className="mb-4">
          <button
            className="text-lg font-semibold w-full text-left bg-gray-800 p-4 rounded hover:bg-gray-700 transition duration-300"
            onClick={toggleFAQ}
          >
            What services do you offer?
          </button>
          {isOpen && (
            <p className="text-base text-gray-400 mt-2">
              We provide expert consulting services across various industries including finance, healthcare, and technology.
            </p>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="mb-4">
          <button
            className="text-lg font-semibold w-full text-left bg-gray-800 p-4 rounded hover:bg-gray-700 transition duration-300"
            onClick={toggleFAQ}
          >
            How do I get started with your consulting services?
          </button>
          {isOpen && (
            <p className="text-base text-gray-400 mt-2">
              Getting started is easy! Simply click the button below to schedule a free consultation.
            </p>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="mb-4">
          <button
            className="text-lg font-semibold w-full text-left bg-gray-800 p-4 rounded hover:bg-gray-700 transition duration-300"
            onClick={toggleFAQ}
          >
            What industries do you specialize in?
          </button>
          {isOpen && (
            <p className="text-base text-gray-400 mt-2">
              We specialize in healthcare, finance, technology, and business strategy, among other areas.
            </p>
          )}
        </div>

        {/* Call to Action */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mt-8">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
