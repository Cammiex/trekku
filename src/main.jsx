import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './routes/Routes.jsx';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

axios.defaults.withCredentials = true;
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>
);
