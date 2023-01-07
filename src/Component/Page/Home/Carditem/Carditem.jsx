import React from 'react';
import { Link } from 'react-router-dom';

const Carditem = ({ item }) => {
    const {_id,image,name,rating ,details,price}=item
    return (
        <div className='shadow-2xl  md:px-0 px-10 text-gray-200 '>
            <div className="w-full shadow-xl h-full">
                <div className='h-full'>
                    <div className=' flex flex-col justify-between h-full rounded-md bg-slate-800'>
                        <figure className='rounded-2xl'><img src={image} alt="wild" className='w-full rounded-t-md'/></figure>
                        <div className="capitalize mx-4 auto-rows-fr">
                            <p className=" text-2xl font-semibold text-amber-600 font-bebas mt-2">{name}</p>
                            <p className=' text-gray-300 font-normal my-2' >{details > 100 ? details : details.slice(0, 100) }</p>
                            <div className='flex justify-between items-center' >
                                <p className=' rounded-md text-lg'>price: ${price}</p>
                                <p className=' rounded-md text-lg'>rating: {rating}</p>
                            </div>
                        </div>
                        <div className='mx-4 py-4 '>
                            <Link to={`/services/${_id}`}><button className="btn bg-orange-800 hover:bg-amber-700 w-full rounded-none btn-md rounded-tr-3xl rounded-bl-3xl text-white border-none duration-1000">details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carditem;