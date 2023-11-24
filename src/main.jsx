import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Landing from './home';
const petrouter = createBrowserRouter([{
    path: "/",
    element: <Landing></Landing>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={petrouter}>
    </RouterProvider>
  //</React.StrictMode>,
)
