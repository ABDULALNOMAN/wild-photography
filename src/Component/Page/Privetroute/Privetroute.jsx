import React,{ useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Privetroute = ({ children }) => {
  const navigate = useNavigate()
    const { users , loding } = useContext(CallContext)
    if (loding) {
      return <div className='text-center relative h-screen translate-y-56'>
        <button className="btn btn-square loading text-white"></button>
      </div>
    }
    if (users && users.uid) {
      return children
    }
    return navigate('/login')
};

export default Privetroute;