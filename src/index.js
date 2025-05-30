import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // <-- THIS LINE IS IMPORTANT
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
