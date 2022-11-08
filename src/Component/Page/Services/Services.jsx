import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Servicesitem from './Servicesitem/Servicesitem';

const Services = () => {
    const datas = useLoaderData()
    return (
        <div className='grid grid-cols-3 gap-4 container mx-auto my-5'>
            {
                datas.map(data=><Servicesitem key={data._id} data={data}></Servicesitem>)
            }
        </div>
    );
};

export default Services;