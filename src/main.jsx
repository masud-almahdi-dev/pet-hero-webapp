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
import Dashboard from './pages/dashboard';
import AddPet from './pages/dashboard/addpet';
import MyAddedPets from './pages/dashboard/myaddedpets';
import CreateCampaign from './pages/dashboard/createcampaign';
import MyCampaigns from './pages/dashboard/mycampaigns';
import MyDonations from './pages/dashboard/mydonations';
import AdoptionRequests from './pages/dashboard/adoptionreq';
import Users from './pages/dashboard/admin/users';
import AllPets from './pages/dashboard/admin/allpets';
import AllDonations from './pages/dashboard/admin/alldonations';
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
        path: "/dashboard",
        element: <Dashboard/>,
        children:[
          {
            path: "/dashboard/",
            element: <div>Hello</div>,
          },
          {
            path: "/dashboard/addpet",
            element: <AddPet/>,
          },
          {
            path: "/dashboard/myaddedpets",
            element: <MyAddedPets/>,
          },
          {
            path: "/dashboard/createcampaign",
            element: <CreateCampaign/>,
          },
          {
            path: "/dashboard/mycampaigns",
            element: <MyCampaigns/>,
          },
          {
            path: "/dashboard/mydonations",
            element: <MyDonations/>,
          },
          {
            path: "/dashboard/adoptionrequests",
            element: <AdoptionRequests/>,
          },
          {
            path: "/dashboard/users",
            element: <Users/>,
          },
          {
            path: "/dashboard/allpets",
            element: <AllPets/>,
          },
          {
            path: "/dashboard/alldonations",
            element: <AllDonations/>,
          },
        ]
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
