import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Container from '../Container/Container';
import LoginImg from '../../assets/login.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { googleLogin, logIn } = useAuth()
  const navigate = useNavigate()

  const location = useLocation()
  //console.log('use location', location);



  // const handelGoogle = () => {
  //   googleLogin()
  //   navigate(location?.state ? location.state : '/')
  // }


  const handleLogin = (e) => {
    e.preventDefault()
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password dosent match",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })


  }
  return (
    <>
      <Container>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-5'>
          <img className='w-full h-auto sm:w-1/2' src={LoginImg} alt="Login" />

          <div className='flex justify-center items-center w-full min-h-screen sm:w-1/2'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
              <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'>Log In</h1>
              </div>

              <form
                onSubmit={handleLogin}
                noValidate=''
                action=''
                className='space-y-6 ng-untouched ng-pristine ng-valid'
              >
                <div className='space-y-4'>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-sm'>
                      Email address
                    </label>
                    <input
                      onBlur={(e) => setEmail(e.target.value)}
                      type='email'
                      name='email'
                      id='email'
                      required
                      placeholder='Enter Your Email Here'
                      className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                      data-temp-mail-org='0'
                    />
                  </div>
                  <div>
                    <div className='flex justify-between'>
                      <label htmlFor='password' className='text-sm mb-2'>
                        Password
                      </label>
                    </div>
                    <input
                      onBlur={(e) => setPassword(e.target.value)}
                      type='password'
                      name='password'
                      autoComplete='current-password'
                      id='password'
                      required
                      placeholder='Enter your password'
                      className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='bg-red-700 w-full rounded-md py-3 text-white'
                  >
                    Continue
                  </button>
                </div>
              </form>

              <div className='space-y-1'>
                <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                  Forgot password?
                </button>
              </div>

              <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px w-16 sm:w-16 dark:bg-gray-700'></div>
                <div className='flex-1 h-px w-16 sm:w-16 dark:bg-gray-700'></div>
              </div>

              {/* <div
                onClick={handelGoogle}
                className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer'
              >
                <FcGoogle size={32} />
                <p>Login with Google</p>
              </div> */}
              <SocialLogin></SocialLogin>

              <p className='px-6 text-sm text-center text-gray-400'>
                Don&apos;t have an account yet?{' '}
                <Link
                  to='/signUp'
                  className='hover:underline hover:text-rose-500 text-gray-600'
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login