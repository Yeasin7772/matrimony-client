import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Biodata from '../pages/Biodatas/Biodata';
import Contact from '../pages/Contact/Contact';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
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
    }
])

export default routes;
