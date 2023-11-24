import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useState } from "react";
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2';

const SignUp = () => {

    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const nevigate = useNavigate()


    const { createUser, handleProfile, googleLogin } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')

    console.log(name, email, password, photo);
    const handelGoogle = () => {
        googleLogin()
        navigate(location?.state ? location.state : '/')
    }

    const handelRegister = (e) => {
        e.preventDefault()

        // clear the form -->

        setRegisterError('')
        setRegisterSuccess('')

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password is less than 6 characters',
                showConfirmButton: false,
                timer: 1500
            })

        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Provide capital characters.')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Provide special capital characters',
                showConfirmButton: false,
                timer: 1500
            })
            return
        } else if (!/[@#$%^&+=!]/.test(password)) {
            setRegisterError('provide a contain special character')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'provide a contain special character',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleProfile(name, photo)
                setRegisterSuccess('user created successFully')
                nevigate('/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user created successFully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.messages)

            })

    }
    return (
        <div className='flex justify-center items-center min-h-screen mt-20'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-300 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>

                </div>
                <form onSubmit={handelRegister}

                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input onBlur={(e) => setName(e.target.value)}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo URL</span>
                            </label>
                            <input onBlur={(e) => setPhoto(e.target.value)} type="Image URL" name='photo' placeholder=" Photo URL" className="input input-bordered" required />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input onBlur={(e) => setEmail(e.target.value)}
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
                            <input onBlur={(e) => setPassword(e.target.value)}
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
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
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>

                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handelGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Sign up with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp
