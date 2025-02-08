import React from 'react';

const Services = () => {
    return (
        <div className="services-section">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Construction Outsourcing</h2>
                    <p>We provide expert solutions for construction outsourcing, ensuring quality and efficiency.</p>
                </div>
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Portfolio Management</h2>
                    <p>Our portfolio management services help you maximize your investments and achieve your financial goals.</p>
                </div>
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Automobile Sales</h2>
                    <p>We offer comprehensive automobile sales services, connecting buyers with the best options available.</p>
                </div>
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Developer Solutions</h2>
                    <p>Our developer solutions are tailored to meet the unique needs of your business.</p>
                </div>
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Mergers and Acquisitions</h2>
                    <p>We provide strategic advice and support for successful mergers and acquisitions.</p>
                </div>
                <div className="service-card bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Company Consulting</h2>
                    <p>Our consulting services help businesses improve performance and achieve their objectives.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;