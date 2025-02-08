// filepath: /consulting-website/src/components/layout/Footer.tsx
import React from 'react';
import Newsletter from '../common/Newsletter';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-300 p-6">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h5 className="font-bold">Quick Links</h5>
                        <a href="/about" className="hover:text-blue-500">About Us</a>
                        <a href="/services" className="hover:text-blue-500">Services</a>
                        <a href="/portfolio" className="hover:text-blue-500">Portfolio</a>
                        <a href="/contact" className="hover:text-blue-500">Contact</a>
                        <a href="/careers" className="hover:text-blue-500">Careers</a>
                    </div>
                    <Newsletter />
                </div>
                <div className="mt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;