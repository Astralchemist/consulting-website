// filepath: /consulting-website/src/components/layout/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-xl font-bold">Consulting Firm</div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-blue-500 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500 transition duration-200">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-500 transition duration-200">Services</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-blue-500 transition duration-200">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
        </li>
        <li>
          <Link to="/careers" className="hover:text-blue-500 transition duration-200">Careers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;