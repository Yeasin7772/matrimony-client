import Loader from "../components/Loader/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const { isAdmin, isAdminLoading } = useAdmin()
    const { user, loading } = useAuth()
  
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <Loader/>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;