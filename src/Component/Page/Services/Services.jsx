import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Servicesitem from './Servicesitem/Servicesitem';

const Services = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='bg-sky-800 py-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto my-5 '>
                {
                    datas.map(data=><Servicesitem key={data._id} data={data}></Servicesitem>)
                }
            </div>
        </div>
    );
};

export default Services;