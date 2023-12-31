import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Biodata from '../pages/Biodatas/Biodata';
import Contact from '../pages/Contact/Contact';
import ProfileDetails from '../pages/PremiumMember/ProfileDetails';
import Dashboard from '../components/Dashboard/Dashboard';
import AdminDashBoard from '../components/Dashboard/AdminHome/AdminDashBoard';
import ManageUsers from '../components/Dashboard/AdminHome/ManageUsers';
import ApprovedRequest from '../components/Dashboard/AdminHome/ApprovedRequest';
import ApprovedPremium from '../components/Dashboard/AdminHome/ApprovedPremium';
import UserHome from '../components/Dashboard/AdminHome/UserHome/UserHome';
import UserFavorites from '../components/Dashboard/AdminHome/UserHome/UserFavorites';
import EditBiodata from '../components/Dashboard/AdminHome/UserHome/EditBiodata';
import ViewBioData from '../components/Dashboard/AdminHome/UserHome/ViewBioData';
import MyContactRequest from '../components/Dashboard/AdminHome/UserHome/MyContactRequest';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';
import GotMarried from '../components/Dashboard/AdminHome/UserHome/GotMarried';
import AllSuccessStory from '../components/Dashboard/AdminHome/AllSuccessStory';
import AdminRoute from './AdminRoutes';
import PrivateRoute from '../routes/PrivateRoute'
import About from '../pages/About/About';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: ()=> fetch('https://matrimony-server-beige.vercel.app/boidatas')
            },
           
            {
                path: '/ProfileDetails/:id',
                element: <PrivateRoute><ProfileDetails></ProfileDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://matrimony-server-beige.vercel.app/boidatas/${params.id}`)
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/biodata',
                element: <Biodata/>
            },
            {
                path: `/checkoutPage`,
                element: <CheckoutPage/>,
                // loader: ({params})=> fetch(`https://matrimony-server-beige.vercel.app/boidatas/${params.biodataId}`)

            },
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[

            // user routes 

            {
                path:'userHome',
                element:<UserHome/>

            },
            {
                path:'userFavorites',
                element:<UserFavorites/>

            },
            {
                path:'editBiodata',
                element:<EditBiodata/>

            },
            {
                path:'viewbiodata',
                element:<ViewBioData/>,
                // loader: ({params})=> fetch(`https://matrimony-server-beige.vercel.app/boidatas/${params.email}`)

            },
            {
                path:'userRequest',
                element:<MyContactRequest/>,
              

            },
            {
                path:'createStory',
                element:<GotMarried/>,
              

            },
            /// admin routes
            {
                path:'adminDashboard',
                element: <AdminRoute><AdminDashBoard/></AdminRoute>
            },
            {
                path:'manageUsers',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path:'approvedPremium',
                element:<AdminRoute> <ApprovedPremium/></AdminRoute>
            },
            {
                path:'approvedRequest',
                element: <AdminRoute><ApprovedRequest/></AdminRoute>
            },
            {
                path:'allSuccessStory',
                element: <AdminRoute><AllSuccessStory/></AdminRoute>
            },
           
        ]
    }
])

export default routes;
