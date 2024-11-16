import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import MenuPage from './Pages/MenuPage/MenuPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import OrderPage from './Pages/Home/OrderPage/OrderPage.jsx';
import Contact from './Pages/ContactPage/Contact.jsx';
import Login from './Pages/LoginPage/Login.jsx';
import AuthProvider from '../Provider/AuthProvider.jsx';
import RegisterPage from './Pages/RegisterPage/RegisterPage.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import DashBoard from './Layout/DashBoard.jsx';
import Cart from './Pages/BashBoard/Cart/Cart.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'menuPage',
        element:<MenuPage></MenuPage>
      },
      {
        path:'orderPage',
        element:<OrderPage></OrderPage>
      },
      {
        path:"contact",
        element: <Contact></Contact>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path:'dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
  
    </AuthProvider>
    
      
</StrictMode>
)
