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
        <div>
            <div className='grid grid-cols-3 gap-6 container mx-auto my-6'>
                {
                    items.map(item=><Servicesitem key={item.index} item={item}></Servicesitem>)
                }
            </div>
            <div className='text-center'>
                <Link to={'/services'}><button className='btn btn-warning w-48'>see all</button></Link>
            </div>
        </div>
    );
};

export default Card;