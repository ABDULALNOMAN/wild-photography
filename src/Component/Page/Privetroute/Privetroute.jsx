import React,{ useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Privetroute = ({ children }) => {
  const navigate = useNavigate()
    const { users , loding } = useContext(CallContext)
    if (loding) {
      return <div>loding...</div>
    }
    if (users && users.uid) {
      return children
    }
    return navigate('/login')
};

export default Privetroute;