import React from 'react';
import { FcBusinessman } from 'react-icons/fc';


const Servicereview = ({ review }) => {
    const { name, photoUrl, text } = review
    return ( 
        <div className='bg-slate-800 shadow-2xl mb-3 md:mx-0 mx-7'>
            <div className='flex justify-between  items-center p-3 rounded-xl'>
                <div>
                    <h4 className='text-2xl font-bebas'>Name: {name}</h4>
                </div>
                {photoUrl?<img className='w-10 h-10 ml-2 rounded-full border-2 border-orange-800' src={<FcBusinessman className='text-4xl'></FcBusinessman>} alt="" />:<FcBusinessman className='text-4xl bg-black w-10 h-10 rounded-full border-2 border-orange-800'></FcBusinessman>}
                
            </div>
            <p className='border-b-4 border-orange-800'></p>
            <div className='p-4'>
                <p>comment: {text}</p>
            </div>
        </div>
    );
};

export default Servicereview;