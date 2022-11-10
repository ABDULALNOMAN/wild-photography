import React from 'react';

const Servicereview = ({ review }) => {
    const {name,photoUrl,text}=review
    return (
        <div className='flex justify-between border bg-sky-700 items-center mb-4'>
            <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Servicereview;