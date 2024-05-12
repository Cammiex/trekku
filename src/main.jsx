import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './routes/Routes.jsx';
import './index.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);
