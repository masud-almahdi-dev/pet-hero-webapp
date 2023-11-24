import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
const petrouter = createBrowserRouter([{
    path: "/",
    element: <h1 className='bg-red-300'>Hello!</h1>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={petrouter}>
    </RouterProvider>
  </React.StrictMode>,
)
