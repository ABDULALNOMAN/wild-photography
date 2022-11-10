import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Navbar = () => {
    const { users, logOutUser } = useContext(CallContext)
    const handleLogOutClick = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log(users)
    return (
        <div className='bg-sky-900'>
            <div className="navbar justify-between container mx-auto">
                 <Link to={'/'} className="btn btn-ghost normal-case text-xl">creation</Link>
                <div>
                    <div className="dropdown mr-3">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                            {users?.email ?<>
                                <li><Link to={'/reviews'}>My reviews</Link></li>
                                    <li><Link to={'/addservices'}>Add service</Link></li>
                                    <li onClick={handleLogOutClick}><Link>sign-Out</Link></li>
                                </>:<>
                                    <li><Link to={'/blog'}>blog</Link></li>
                                    <li><Link to={'/login'}>login</Link></li>
                                    <li><Link to={'/register'}>register</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        {users?.email ?<>
                            <li><Link to={'/reviews'}>My reviews</Link></li>
                            <li><Link to={'/addservices'}>Add service</Link></li>
                            <li onClick={handleLogOutClick}><Link>sign-Out</Link></li>
                        </>:<>
                                <li><Link to={'/blog'}>blog</Link></li>
                                <li><Link to={'/login'}>login</Link></li>
                                <li><Link to={'/register'}>register</Link></li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;