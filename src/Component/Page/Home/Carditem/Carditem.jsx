import React from 'react';
import { Link } from 'react-router-dom';

const Carditem = ({ item }) => {
    const {_id,image,name,rating ,details,price}=item
    return (
        <div className=''>
            <div className="w-full shadow-xl col-span-6 h-full">
                <div className='flex flex-col h-full'>
                    <div className='bg-sky-400 rounded-t-xl h-full '>
                        <figure><img src={image} alt="wild" className='rounded-t-xl' /></figure>
                        <div className="">
                            <h2 className="card-title">{name}</h2>
                            <p>{details > 100 ? details : details.slice(0, 100) }</p>
                            <p>price {price}</p>
                            <p>rating {rating}</p>
                        </div>
                    </div>
                    <Link to={`/services/${_id}`}><button className="btn rounded-none btn-primary rounded-b-xl w-full">details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Carditem;