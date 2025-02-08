import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                We are a leading consulting firm specializing in construction outsourcing, portfolio management, automobile sales, developer solutions, mergers and acquisitions, and company consulting. Our team is dedicated to providing innovative solutions tailored to meet the unique needs of our clients.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
                Our mission is to empower businesses by delivering exceptional consulting services that drive growth and success.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
                We envision a world where businesses thrive through strategic partnerships and innovative solutions.
            </p>
        </div>
    );
};

export default About;