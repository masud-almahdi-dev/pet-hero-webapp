import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from './layout';
import Home from './pages/home';
import DonationListing from './pages/donationlisting';
import PetListing from './pages/petlisting';
import DonationDetails from './pages/donationdetails';
import PetDetails from './pages/petdetails';
import DashboardUser from './pages/dashboarduser';
import DashboardAdmin from './pages/dashboardadm';
const petrouter = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <DonationListing></DonationListing>,
      },
      {
        path: "/pets",
        element: <PetListing/>,
      },
      {
        path: "/donationdetail/:id",
        element: <DonationDetails/>,
      },
      {
        path: "/petdetail/:id",
        element: <PetDetails/>,
      },
      {
        path: "/dashboarduser",
        element: <DashboardUser/>,
      },
      {
        path: "/dashboardadm",
        element: <DashboardAdmin/>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={petrouter}>
    </RouterProvider>
  //</React.StrictMode>,
)
