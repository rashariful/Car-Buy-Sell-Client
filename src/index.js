import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './Context/UserContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <UserContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContext>
</QueryClientProvider>
);


