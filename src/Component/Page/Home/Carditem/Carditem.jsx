import React from 'react';
import { Link } from 'react-router-dom';

const Carditem = ({ item }) => {
    const {_id,image,name,rating ,details,price}=item
    return (
        <div className='shadow-2xl  md:px-0 px-10 text-black '>
            <div className="w-full shadow-xl h-full">
                <div className='h-full'>
                    <div className=' flex flex-col justify-between h-full bg-gray-400 rounded-md'>
                        <figure className='rounded-2xl'><img src={image} alt="wild" className='w-full rounded-t-md'/></figure>
                        <div className="capitalize mx-4 auto-rows-fr">
                            <p className=" text-2xl font-semibold text-gray-800 font-bebas mt-2">{name}</p>
                            <p className=' text-black font-normal my-2' >{details > 100 ? details : details.slice(0, 100) }</p>
                            <div className='flex justify-between items-center' >
                                <p className=' rounded-md text-lg'>price: ${price}</p>
                                <p className=' rounded-md text-lg'>rating: {rating}</p>
                            </div>
                        </div>
                        <div className='mx-4 py-4 '>
                            <Link to={`/services/${_id}`}><button className="btn btn-primary w-full rounded-none btn-md rounded-tr-3xl rounded-bl-3xl">details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carditem;