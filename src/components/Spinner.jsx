// Spinner.js
import React from 'react';

export const Spinner = () => (
  <div className="spinner" style={{
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#333',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    margin: '20px auto'
  }}></div>
);

