import React,{useContext,useState,useEffect} from 'react';
import { CallContext } from '../../Contexting/Contexting';
import Reviewitem from './Reviewitem/Reviewitem';

const Myreviews = () => {
    const [items, setitem] = useState([])
    const { users } = useContext(CallContext)
    useEffect(() => {
      fetch('http://localhost:5000/getreviews')
        .then(res => res.json())
        .then(data => {
            if (users?.email) {
                const datas = data.filter(n=>n.email===users?.email)
                setitem(datas)
                console.log(datas)
            }
        })
    }, [])
    return (
        <div className='container mx-auto'>
            {
                items.map(item =><Reviewitem key={item._id} item={item}></Reviewitem>)
            }
        </div>
    );
};

export default Myreviews;