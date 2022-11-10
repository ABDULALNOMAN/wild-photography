import React from 'react';
import Helmet from 'react-helmet';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Servicesitem = ({ data }) => {
    console.log(data)
    const { name, _id, price, rating, details, image } = data
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="w-full h-full shadow-2xl">
                <div className='flex flex-col h-full'>
                    <div className='bg-sky-800 h-full '>
                        <figure><img src={image} alt="wild" className='w-full' /></figure>
                        <div className="mx-3 capitalize">
                            <h2 className="text-2xl font-semibold text-warning">{name}</h2>
                            <p className='text-md'>{details > 100 ? details : details.slice(0, 100) }</p>
                            <div className='flex justify-between items-end mt-3 mb-0 relative bottom-0'>
                                <p className='text-lg'><span className='text-amber-700 font-semibold'>price</span> :{price}</p>
                                <p className='text-lg'><span className='text-amber-700 font-semibold'>rating</span> :{rating}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/services/${_id}`}><button className="btn btn-primary rounded-none w-full">details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Servicesitem;