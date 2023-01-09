import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../features/auth/authApi';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [register, { data, isLoading, error:responseError }] =  useRegisterMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            console.log('error');
        }
        if (data?.accessToken && data?.user) {
            navigate("/home");
        }
    }, [data, responseError, navigate]);

    const submitHandle = (e) => {
        e.preventDefault();
        alert("okk")

        if (confirmPassword !== password) {
            alert("Passwords do not match");
        } else {
            register({
                email,
                password,
            });
        }
        
    }
    return (
        <div className='container mx-auto h-screen'>
            <div className='min-h-full flex items-center justify-center'>
                <div class="p-6 w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">

                <form className="mt-8 space-y-6 w-full" onSubmit={submitHandle}>
                        <h2>Sign Up</h2>
                        <div className="shadow-sm">
                            <div>
                                
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className='w-full p-4 border-2'
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mt-4'>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className='w-full p-4 border-2'
                                    autoComplete="current-password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className='mt-4'>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className='w-full p-4 border-2'
                                    autoComplete="current-password"
                                    required
                                    placeholder="Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="text-sm">
                                <Link
                                    to="/"
                                    className="font-medium text-green-600 hover:text-green-500"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp