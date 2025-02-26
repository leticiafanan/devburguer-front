import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';

import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/stardard';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme='dark' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
