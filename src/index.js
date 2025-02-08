// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './styles/index.css';

// Ensure type safety for root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement); // React 18 root rendering

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you're using CRA or Webpack, no need for `import.meta.hot`
