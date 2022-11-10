import React, { useEffect, useState } from 'react';
import Servicesitem from '../Carditem/Carditem';
import { Link} from 'react-router-dom';

const Card = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div className=' bg-sky-900 '>
            <div className='py-20 container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 my-6'>
                    {
                        items.map(item=><Servicesitem key={item.index} item={item}></Servicesitem>)
                    }
                </div>
                <div className='text-center'>
                    <Link to={'/services'}><button className='btn btn-warning w-48'>see all</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;