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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    
      
</StrictMode>
)
