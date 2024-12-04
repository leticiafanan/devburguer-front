import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { router } from './routes'; 

import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyles />
    <ToastContainer  autoClose={2000} theme='dark'/>
  </StrictMode>,
)
