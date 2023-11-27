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
import PrivateRoute from '../routes/PrivateRoute'
import AdminDashBoard from '../components/Dashboard/AdminHome/AdminDashBoard';
import ManageUsers from '../components/Dashboard/AdminHome/ManageUsers';
import ApprovedRequest from '../components/Dashboard/AdminHome/ApprovedRequest';
import ApprovedPremium from '../components/Dashboard/AdminHome/ApprovedPremium';
import UserHome from '../components/Dashboard/AdminHome/UserHome/UserHome';
import UserFavorites from '../components/Dashboard/AdminHome/UserHome/UserFavorites';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: ()=> fetch('http://localhost:5000/boidatas')
            },
           
            {
                path: '/ProfileDetails/:id',
                element: <PrivateRoute><ProfileDetails></ProfileDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/boidatas/${params.id}`)
            },
            {
                path: '/about',
                element: <h3>This is about page</h3>
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
            /// admin routes
            {
                path:'adminDashboard',
                element: <AdminDashBoard/>
            },
            {
                path:'manageUsers',
                element: <ManageUsers/>
            },
            {
                path:'approvedPremium',
                element: <ApprovedPremium/>
            },
            {
                path:'approvedRequest',
                element: <ApprovedRequest/>
            },
           
        ]
    }
])

export default routes;
