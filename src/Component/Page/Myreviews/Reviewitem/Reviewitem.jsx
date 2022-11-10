import React from 'react';
import { ToastContainer } from 'react-toastify';

const Reviewitem = ({ item,handleDelete }) => {
    const { email, photoUrl, name, rating, servvice, text, _id } = item
    
    return (
        <div className='bg-sky-700 shadow-2xl mb-3 relative'>
            <div className=''>
                <div className='flex justify-between  items-center w-48 p-3'>
                    <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
                    <div>
                        <h4 className='text-2xl '>{name}</h4>
                    </div>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm mt-2 btn-warning absolute right-2 top-3">delete</button>
            </div>
            <hr />
            <div className='p-4'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Reviewitem;