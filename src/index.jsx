import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store'
import { Provider } from 'react-redux'

import App from './App';

// 引入公用样式
import './assets/style/index.scss'

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
  <Provider store={store}>
    <App />
  </Provider>
);

