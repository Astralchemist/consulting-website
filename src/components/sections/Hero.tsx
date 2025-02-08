// filepath: /consulting-website/src/components/sections/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Consulting Firm</h1>
                <p className="text-lg mb-8">Your partner in success across various industries.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;