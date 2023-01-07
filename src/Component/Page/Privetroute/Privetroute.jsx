import React,{ useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Privetroute = ({ children }) => {
  const { loding,users } = useContext(CallContext)
  const location = useLocation()
  if (loding) {
      return <div className='text-center relative h-screen translate-y-56'>
        <button className="btn btn-square loading text-white"></button>
      </div>
    }
    if (users) {
      return children
  }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default Privetroute;