import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<AppWrapper />);

reportWebVitals();
