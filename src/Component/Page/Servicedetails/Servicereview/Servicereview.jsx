import React from 'react';

const Servicereview = ({ review }) => {
    const {name,photoUrl,text}=review
    return ( 
        <div className='bg-sky-700 shadow-2xl mb-3 md:mx-0 mx-7'>
            <div className='flex justify-between  items-center p-3'>
                <div>
                    <h4 className='text-2xl '>{name}</h4>
                </div>
                <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
            </div>
            <hr />
            <div className='p-4'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Servicereview;