import React from 'react';

const Addservices = () => {

    const handleAddServices = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const text = form.text.value;
        console.log(name, image, price, rating, text)
        const addeditem = {
            image: image,
            name: name,
            rating: rating,
            price: price,
            details:text,
        }
        fetch('https://creative-assign-server-abdulalnoman.vercel.app/addservices', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(addeditem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    confirm('added successfuly')
                }
            })
    }
    return (
        <div className='w-full mx-auto py-10 bg-sky-800'>
            <form onSubmit={handleAddServices} className='grid grid-cols-1 gap-2 md:w-2/3 md:mx-auto mx-4'>
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div className='w-full'>
                        <input type="text" placeholder="name" name='name' className="input input-bordered input-info w-full " />
                    </div>
                    <div className='w-full '>
                        <input type="text" placeholder="imgUrl" name='image' className="input input-bordered input-info w-full " />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div className='w-full'>
                        <input type="text" placeholder="price" name='price' className="input input-bordered input-info w-full " />
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="rating" name='rating' className="input input-bordered input-info w-full " />
                    </div>
                </div>
                <textarea className="textarea textarea-primary w-full h-28" placeholder="details" name='text'></textarea>
                <button className='btn btn-info w-full'>click</button>
            </form>
        </div>
    );
};

export default Addservices;