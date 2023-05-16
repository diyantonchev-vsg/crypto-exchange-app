import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import ExchangeApp from './ExchangeApp.tsx';
import store from './redux/store.ts';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ExchangeApp />
    </Provider>
  </React.StrictMode>,
)
