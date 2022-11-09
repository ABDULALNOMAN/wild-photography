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
        fetch('http://localhost:5000/addservices', {
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
        <div>
            <form onSubmit={handleAddServices} className='flex flex-col'>
                <input type="text" placeholder="name" name='name' className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="imgUrl" name='image' className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="price" name='price' className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="rating" name='rating' className="input input-bordered input-info w-full max-w-xs" />
                <textarea className="textarea textarea-primary w-48" placeholder="details" name='text'></textarea>
                <button className='btn btn-primary w-28'>click</button>
            </form>
        </div>
    );
};

export default Addservices;