// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux Store
import { store } from './store';
// Providers
import { Provider } from 'react-redux';
// Components
import App from './App';
// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
