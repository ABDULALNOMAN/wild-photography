import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Servicesitem from '../Carditem/Carditem';

const Card = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://creative-assign-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className=''>
            <div className='py-4 container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-6 rounded-md '>
                    {
                        items.map((item)=><Servicesitem key={item._id} item={item}></Servicesitem>)
                    }
                </div>
                <div className='text-center'>
                    <Link to={'/services'}><button className='btn bg-amber-800 hover:bg-amber-700 text-white w-48'>see all</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;