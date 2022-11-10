import React from 'react';

const Servicereview = ({ review }) => {
    const {name,photoUrl,text}=review
    return ( 
        <div className='bg-sky-700 shadow-2xl mb-3'>
            <div className='flex justify-between  items-center w-48 p-3'>
                <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
                <div>
                    <h4 className='text-2xl '>{name}</h4>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Servicereview;