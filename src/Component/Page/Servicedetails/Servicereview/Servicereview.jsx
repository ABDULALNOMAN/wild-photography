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
            <div className='my-2 mr-2'>
                <button className="btn btn-sm btn-success">update</button>
                <br />
                <button className="btn btn-sm mt-2 btn-warning">remove</button>
            </div>
        </div>
    );
};

export default Servicereview;