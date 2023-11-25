import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <progress className="progress w-full"></progress>
        // 
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
export default PrivateRoute;