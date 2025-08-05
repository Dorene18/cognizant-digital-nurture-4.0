import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Attach App component to the root div in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
