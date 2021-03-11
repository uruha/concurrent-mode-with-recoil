import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.unstable_createRoot(
  document.getElementById('root') as Element
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
