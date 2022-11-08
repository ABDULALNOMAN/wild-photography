import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const Servicedetails = () => {
    const data = useLoaderData()
    const {image,name,price,rating,details,_id} = data
    return (
        <div>
            <div className="w-full shadow-xl col-span-6 h-full bg-sky-500 my-5">
                <div className='flex flex-row'>
                    <div className='w-1/3 h-full'>
                        <PhotoView src={image}>
                            <figure><img src={image} alt="wild" className='w-full h-full' /></figure>
                        </PhotoView>
                    </div>
                    <div className='w-2/3 ml-4 relative'>
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>
                         <p>price {price}</p>
                        <p>rating {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;