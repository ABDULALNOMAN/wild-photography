import React, { useContext, useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';
import Servicereview from './Servicereview/Servicereview';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const Servicedetails = () => {
    const [reviewItem, setReviewItem] = useState([])
    const { users } = useContext(CallContext)
    const { image, name, price, rating, details, _id } = useLoaderData()
    useEffect(() => {
        fetch('http://localhost:5000/getreviews')
            .then(res => res.json())
            .then(data =>setReviewItem(data))
    }, [])
    console.log(reviewItem)
    const handleReviewUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const username = form.name.value;
        const text = form.text.value;
        const photo = form.photo.value;
        const email = users?.email;
        const review = {
            name: username,
            photoUrl: photo,
            email: email,
            text: text,
            service: name,
            rating:rating
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    const reviewDataItem = [...reviewItem, review]
                    setReviewItem(reviewDataItem)
                }
            })
    }
    console.log(users)
    return (
        <div className='bg-cyan-800'>
            <div className='container mx-auto py-4'>
                <div className=''>
                <Helmet>
                    <title>servicesDetails</title>
                </Helmet>
                    <div className="w-full shadow-xl h-full bg-sky-500 py-5 ">
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full md:p-3 p-10'>
                            <div className=' col-span-1 h-full'>
                                <PhotoView src={image}>
                                <img src={image} alt="wild" className='w-full h-full' />
                                </PhotoView>
                            </div>
                            <div className='lg:col-span-2 col-span-1 ml-4'>
                                <h2 className="text-4xl text-center font-extrabold text-orange-800">{name}</h2>
                                <p className='my-3'>{details}</p>
                                <p className='text-xl'><span className='text-2xl font-semibold text-orange-600'>price</span>: ${price}</p>
                                <p className='text-xl'><span className='text-2xl font-semibold text-orange-600'>rating</span>:{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 w-full mt-2'>
                        {users?.email ?     
                        <form onSubmit={handleReviewUser} className='col-span-1 md:mx-0 mx-7 md:mb-0 mb-5'>
                            <input type="text" name='name' placeholder="enter your name" className='input input-bordered input-primary w-full mb-2'/>
                            <br />
                            <input type="text" name='photo' placeholder="enter your photoUrl" className="input input-bordered input-primary w-full mb-2" />
                            <br />
                            <textarea name='text' className="textarea textarea-bordered w-full h-48" placeholder="enter your review text"></textarea>
                            <button className='btn btn-primary w-full'>submit</button>
                            </form>
                            :
                            <h2 className='col-span-1 lg:text-4xl md:text-3xl text-lg lg:mt-10 mt-5 font-semibold md:text-left text-center md:mb-0 mb-5'>please <Link className='text-blue-600 underline ' to="/login">log in</Link> to add a review</h2>}
                        <div className='md:col-span-2 col-span-1 md:ml-6'>
                            {
                                reviewItem.map(rivi=><Servicereview key={rivi._id} review={rivi}></Servicereview>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;