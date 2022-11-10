import React from 'react';
import { Link } from 'react-router-dom';

const Carditem = ({ item }) => {
    const {_id,image,name,rating ,details,price}=item
    return (
        <div className='shadow-2xl'>
            <div className="w-full shadow-xl col-span-6 h-full">
                <div className='flex flex-col h-full'>
                    <div className='h-full bg-sky-700'>
                        <figure><img src={image} alt="wild" className='w-full' /></figure>
                        <div className="mx-3 capitalize">
                            <h2 className="text-2xl font-semibold text-cyan-500">{name}</h2>
                            <p className='text-md h-18'>{details > 100 ? details : details.slice(0, 100) }</p>
                            <div className='flex justify-between items-end mt-3 mb-0 relative bottom-0' >
                                <p className=' rounded-md p-2 text-lg'>price: ${price}</p>
                                <p className=' rounded-md p-2 text-lg'>rating: {rating}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/services/${_id}`}><button className="btn rounded-none btn-primary w-full">details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Carditem;