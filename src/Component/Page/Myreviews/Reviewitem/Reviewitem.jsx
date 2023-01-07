import React from 'react';

const Reviewitem = ({ item,handleDelete }) => {
    const { email, photoUrl, name, rating, servvice, text, _id } = item
    
    return (
        <div className='bg-sky-700 shadow-lg shadow-zinc-800 mb-3 relative lg:mx-28 mx-3'>
            <div className=''>
                <div className='flex justify-between  items-center w-72 p-3'>
                    <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
                    <div>
                        <h4 className='text-2xl '>{name}</h4>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm mt-2 btn-warning absolute right-2 top-3">delete</button>
                    <button className='btn btn-primary'>update</button>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Reviewitem;