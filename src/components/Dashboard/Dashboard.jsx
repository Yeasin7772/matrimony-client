import { FaAd, FaClipboardList, FaCalendar, FaHome, FaShoppingCart, FaEnvelope, FaUtensils, FaList, FaUsers, FaBook } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const Dashboard = () => {
    const {logOut} = useAuth()
    const { isAdmin } = useAdmin()
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-red-200">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminDashboard'> <FaHome />  Admin Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageUsers'>  <FaUsers /> Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/approvedPremium'>  <FaList /> Approved Premium</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/approvedRequest'> <FaBook /> Approved Contact Request</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'> <FaHome />Home</NavLink>
                            </li>
                            <li>
                                <Link  onClick={handelLogOut} > Logout</Link>

                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userDashboard">
                                        <FaHome></FaHome>
                                        User Dashboard</NavLink>
                                </li>



                                <div className="divider"></div>
                                <li>
                                    <NavLink to='/'> <FaHome />  Home</NavLink>
                                </li>
                                <li>
                                    <NavLink  onClick={handelLogOut} > <FaUsers /> Logout</NavLink>
                                </li>



                            </>

                    }







                </ul>

            </div>
            <div className="flex-1 p-5 space-y-7">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;