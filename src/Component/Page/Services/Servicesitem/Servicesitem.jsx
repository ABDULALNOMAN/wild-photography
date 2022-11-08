import React from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Servicesitem = ({ data }) => {
    console.log(data)
    const { name, _id, price, rating, details, image } = data
    return (
        <div>
            <div className="w-full shadow-xl h-full">
                <div className='flex flex-col h-full'>
                    <div className='bg-sky-400 rounded-t-xl h-full '>
                        <figure><img src={image} alt="wild" className='rounded-t-xl' /></figure>
                        <div className="">
                            <h2 className="card-title">{name}</h2>
                            <p>{details > 100 ? details : details.slice(0, 100) }</p>
                            <p>price {price}</p>
                            <p>rating/sdfsdfsdfsdf {rating}</p>
                        </div>
                    </div>
                    <Link to={`/services/${_id}`}><button className="btn rounded-none btn-primary rounded-b-xl w-full">details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Servicesitem;