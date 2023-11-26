import useAuth from "../../hooks/useAuth";
import { FcGoogle } from 'react-icons/fc'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const handelGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location?.state ? location.state : '/')
                    })
            })

    }
    return (
        <div
            onClick={handelGoogle}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer'
        >
            <FcGoogle size={32} />
            <p>Sign up with Google</p>
        </div>
    );
};

export default SocialLogin;