// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux Store
import { store } from './store';
// Providers
import { Provider } from 'react-redux';
// Components
// import App from './App';
// import { PokemonApp } from './PokemonApp';
import { TodoApp } from './TodoApp';
// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
