import React from 'react';

const Photogallaryitem = ({ value }) => {
    const {Type,picture,_id } = value
    console.log(value)
    return (
        <div className={`text-3xl 
        ${Type == "a" && 'col-start-1 col-end-3 row-start-1 row-end-2'} 
        ${Type == "b" && 'col-start-3 col-end-7 row-start-1 row-end-2'} 
        ${Type == "c" && 'col-start-7 col-end-10 row-start-1 row-end-2'} 
        ${Type == "d" && 'col-start-10 col-end-13 row-start-1 row-end-2'} 
        ${Type == "e" && 'col-start-1 col-end-4 row-start-2 row-end-3'} 
        ${Type == "f" && 'col-start-4 col-end-8 row-start-2 row-end-3 '} 
        ${Type == "g" && 'col-start-8 col-end-11 row-start-2 row-end-4'} 
        ${Type == "h" && 'col-start-11 col-end-13 row-start-2 row-end-3'} 
        ${Type == "i" && 'col-start-1 col-end-3 row-start-3 row-end-4'} 
        ${Type == "j" && 'col-start-3 col-end-5 row-start-3 row-end-4'} 
        ${Type == "k" && 'col-start-5 col-end-8 row-start-3 row-end-4'} 
        ${Type == "l" && 'col-start-11 col-end-13 row-start-3 row-end-4'} 
        `}>
            <img className={`w-full
            ${Type == "a" && 'h-52'}
            ${Type == "b" && 'h-52'}
            ${Type == "c" && 'h-52'}
            ${Type == "d" && 'h-52'}
            ${Type == "e" && 'h-52'}
            ${Type == "f" && 'h-52'}
            ${Type == "g" && 'h-full'}
            ${Type == "h" && 'h-52'}
            ${Type == "i" && 'h-52'}
            ${Type == "j" && 'h-52'}
            ${Type == "k" && 'h-52'}
            ${Type == "l" && 'h-52'}
            `} src={picture} alt="" />
        </div>
    );
};

export default Photogallaryitem;