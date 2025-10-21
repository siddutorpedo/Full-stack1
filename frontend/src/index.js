import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // make sure this file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
