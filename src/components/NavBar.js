import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const [nav, setNav] = useState(false)


    const { user, logout } = UserAuth()
    const navigate = useNavigate();
    const handleNav = () => {
        setNav(!nav)
    }
    const handlelogout = async (e) => {
        e.preventDefault()
        try {
            await logout()
            navigate('/')
            setNav(!nav)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='rounded-div flex items-center justify-between h-20 font-bold sm:mx-4'>

            <h1 className='text-2xl'>Loan application System</h1>

            {user?.email ? (
                <div className='hidden md:flex'>
                    <Link to='/home'>
                        <h1 className='p-4'>Registration</h1>
                    </Link>
                    <Link to='/customers' className='p-4'>Customers </Link>
                    <Link to='/records' className='p-4'>Records </Link>
                    <button onClick={handlelogout}>Sign Out</button>
                </div>
            ) : (
                <div className='hidden md:block'>
                    <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>

                </div>
            )}
            <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* mobile */}
            <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-white ease-in duration-300 z-10' : 'fixed left-[-100%] top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'}>
                {user?.email ? (<ul className='w-full p-4'>
                    <li onClick={handleNav} className='border-b py-6'>
                        <Link to='/home'>Registration</Link>
                    </li>
                    <li onClick={handleNav} className='border-b py-6'>
                        <Link to='/customers'>Customers</Link>
                    </li>

                </ul>) : (<ul className='w-full p-4'>
                    <li onClick={handleNav} className='border-b py-6'>
                        <Link to='/'>Registration</Link>
                    </li>
                    <li onClick={handleNav} className='border-b py-6'>
                        <Link to='/'>Customers</Link>
                    </li>

                </ul>)}

                {user?.email ? (<div className='flex flex-col w-full p-4'>
                    <Link to='/records'>
                        <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>records</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={handlelogout} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Out</button>
                    </Link>
                </div>) : (<div className='flex flex-col w-full p-4'>
                    <Link to='/'>
                        <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button>
                    </Link>

                </div>)}

            </div>
        </div>
    );
}

export default Navbar;
