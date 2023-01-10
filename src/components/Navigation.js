import React from 'react'
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../features/auth/authSlice';

const Navigation = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };

  return (
        <div className='bg-black'>
            <div className='text-white container mx-auto p-4 navbar flex justify-between '>
                <div>
                <h2>Logo</h2>
                </div>
                <div>
                 <span onClick={logout} className='cursor-pointer'>Log out</span>
                </div>
            </div>
        </div>
     )
}

export default Navigation