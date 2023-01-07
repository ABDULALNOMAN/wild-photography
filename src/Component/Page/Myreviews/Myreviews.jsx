import React, { useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallContext } from '../../Contexting/Contexting';
import Reviewitem from './Reviewitem/Reviewitem';

const Myreviews = () => {
    toast('one item delete')
    const [items, setitem] = useState([])
    const { users } = useContext(CallContext)
    useEffect(() => {
      fetch('http://localhost:5000/getreviews')
        .then(res => res.json())
        .then(data => {
            if (users?.email) {
                const datas = data.filter(n=>n.email===users?.email)
                setitem(datas)
            }
        })
    }, [])
    const handleDelete = (id) => {
        fetch (`http://localhost:5000/deletedata?delete=${id}`, {
            method:'DELETE'
        })
        .then(res=>res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    confirm('one item delete')
                    const exist = items.filter(item=>item._id !== id)
                    setitem(exist)
                }
            })
    }
    return (
        <div className='bg-sky-700'>
            <div className='container mx-auto min-h-screen '>
            <Helmet>
                    <title>servicesDetails</title>
                    <meta name="description" content="Helmet application" />
            </Helmet>
                <div className=''>
                    {
                        items.length>0? items.map(item =><Reviewitem key={item._id} item={item} handleDelete={handleDelete}></Reviewitem>):<div className='text-5xl text-center pt-28'>No reviews were added</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Myreviews;