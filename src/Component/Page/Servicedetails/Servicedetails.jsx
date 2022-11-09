import React,{useContext} from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { CallContext } from '../../Contexting/Contexting';

const Servicedetails = () => {
    const { users } = useContext(CallContext)
    console.log(users)
    const data = useLoaderData()
    const { image, name, price, rating, details, _id } = data
    const handleReviewUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const text = form.text.value;
        const photo = form.photo.value;
        const email = users?.email;
        console.log(name, text, photo, email)
        const review = {
            name: name,
            photoUrl: photo,
            email: email,
            text: text
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='container mx-auto'>
            <div className="w-full shadow-xl col-span-6 h-full bg-sky-500 my-5">
                <div className='flex flex-row'>
                    <div className='w-1/3 h-full'>
                        <PhotoView src={image}>
                            <figure><img src={image} alt="wild" className='w-full h-full' /></figure>
                        </PhotoView>
                    </div>
                    <div className='w-2/3 ml-4 relative'>
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>
                         <p>price {price}</p>
                        <p>rating {rating}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <form onSubmit={handleReviewUser} className='w-1/3'>
                    <input type="text" name='name' placeholder="enter your name" className="input input-bordered input-primary w-full mb-2" />
                    <br />
                    <input type="text" name='photo' placeholder="enter your name" className="input input-bordered input-primary w-full mb-2"  />
                    <br />
                    <textarea name='text' className="textarea textarea-bordered w-full h-48" placeholder="enter your review text"></textarea>
                    <button className='btn btn-primary w-full'>submit</button>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;