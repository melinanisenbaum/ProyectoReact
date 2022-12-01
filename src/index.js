import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css'
import './index.css';
//import App from './App';
import Header from './Component/Header/Header.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

