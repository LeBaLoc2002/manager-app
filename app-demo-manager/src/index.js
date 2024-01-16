import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './app/redux/store';
import './index.css'
const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
