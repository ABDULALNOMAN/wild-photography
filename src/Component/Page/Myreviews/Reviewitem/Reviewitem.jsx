import React from 'react';
import { ToastContainer } from 'react-toastify';

const Reviewitem = ({ item,handleDelete }) => {
    const { email, photoUrl, name, rating, servvice, text, _id } = item
    
    return (
        <div className='flex justify-between border bg-sky-700 items-center'>
            <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <div className='my-2 mr-2 flex justify-around items-center'>
                <div>
                    <button className="btn btn-sm btn-success">update</button>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm mt-2 btn-warning">delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Reviewitem;