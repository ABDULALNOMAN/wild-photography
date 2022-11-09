import React from 'react';

const Reviewitem = ({ item }) => {
    const { email, photoUrl, name, rating, servvice, text, _id } = item
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deletedata?delete=${id}`, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className='flex justify-between border bg-sky-700 items-center'>
            <img className='w-14 h-14 ml-2 rounded-full' src={photoUrl} alt="" />
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <div className='my-2 mr-2 flex justify-around items-center'>
                <button className="btn btn-sm btn-success">update</button>
                <br />
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm mt-2 btn-warning">delete</button>
            </div>
        </div>
    );
};

export default Reviewitem;