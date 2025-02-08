// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Careers from './components/sections/Careers';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
