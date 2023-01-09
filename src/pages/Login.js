import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../features/auth/authApi';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
   
    return (
        <div className='container mx-auto h-screen'>
            <div className='min-h-full flex items-center justify-center'>
                <div class="p-6 w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">

                    <form className="mt-8 space-y-6 w-full" action="#" method="POST">
                        <h2>Login</h2>
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
                                    to="/signup"
                                    className="font-medium text-green-600 hover:text-green-500"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login