import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../assets/7741849_3747371.jpg'

const Notfound = () => {
    return (
        <div className='bg-white relative w-full mx-auto h-screen text-center'>
            <div className='pt-20'>
                <img src={notfound} className="w-96 h-96 mx-auto" alt="" />
                <p><Link className='text-blue-800 font-bold text-4xl underline' to={'/'}>go to home</Link></p>
            </div>
        </div>
    );
};

export default Notfound;