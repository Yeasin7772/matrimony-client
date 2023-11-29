import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <Loader/>
        // 
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
export default PrivateRoute;