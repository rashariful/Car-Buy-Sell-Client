import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './Context/UserContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CheckoutForm from './Components/Dashboard/Payment/CheckoutForm ';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const queryClient = new QueryClient()
const stripePromise = loadStripe(
  "pk_test_51M8WntKhkwZTuCQF41ydTggYOKlwx7G3Z0rs5l16I1CBaTKsEQMzdcysh4PSDx6dO1HmfCXjQDjRbf3W8SwLmdVy00B7GzP1Uz"
);

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


