import { createBrowserRouter  } from "react-router-dom";

import { Login } from '../containers/Login';
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/cadastro',
    element: <Register/>
  },
  {
    path: '/cardapio',
    element: <Menu/>
  },
  
]);