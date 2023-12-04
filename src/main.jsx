import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, RouterProvider, useLocation, useNavigate} from "react-router-dom";
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
import DashboardMain from './pages/dashboard/dashboardmain';
import { AuthProvider, UserDataProvider, useAuth, useUserData } from './auth/Auth';
import AuthPage from './pages/authpage';
import UpdatePet from './pages/dashboard/updatepet';
import UpdateDonation from './pages/dashboard/updatedonation';
import PrivateRoute, { Adminroute } from './PrivateRoute';
import Errorpage from './errorpage';

const petrouter = createBrowserRouter([{
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <AuthPage></AuthPage>
      },
      {
        path: "/signup",
        element: <AuthPage></AuthPage>
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
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          {
            path: "/dashboard/",
            element: <DashboardMain/>,
          },
          {
            path: "/dashboard/addpet",
            element: <AddPet/>,
          },
          {
            path: "/dashboard/updatepet/:id",
            element: <UpdatePet/>,
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
            path: "/dashboard/updatedonation/:id",
            element: <UpdateDonation/>,
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
            path: "/dashboard/admin/users",
            element: <Adminroute><Users/></Adminroute>,
          },
          {
            path: "/dashboard/admin/allpets",
            element: <Adminroute><AllPets/></Adminroute>,
          },
          {
            path: "/dashboard/admin/alldonations",
            element: <Adminroute><AllDonations/></Adminroute>,
          },
        ]
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <RouterProvider router={petrouter}>
        </RouterProvider>
      </UserDataProvider>
    </AuthProvider>
  //</React.StrictMode>,
)
