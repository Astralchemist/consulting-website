// filepath: /consulting-website/src/components/sections/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services-section py-20 bg-black text-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Construction Outsourcing</h3>
            <p>We provide expert solutions for construction project management and outsourcing.</p>
          </div>
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Portfolio Management</h3>
            <p>Our team helps you manage and optimize your investment portfolios effectively.</p>
          </div>
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Automobile Sales</h3>
            <p>We offer consulting services for automobile sales strategies and market analysis.</p>
          </div>
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Developer Solutions</h3>
            <p>Our developer solutions enhance your software development processes.</p>
          </div>
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Mergers and Acquisitions</h3>
            <p>We provide strategic advice for mergers and acquisitions to maximize value.</p>
          </div>
          <div className="service-card bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold">Company Consulting</h3>
            <p>Our consulting services help businesses improve performance and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;