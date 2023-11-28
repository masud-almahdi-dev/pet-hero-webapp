import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from './layout';
import Home from './pages/home';
const petrouter = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={petrouter}>
    </RouterProvider>
  //</React.StrictMode>,
)
