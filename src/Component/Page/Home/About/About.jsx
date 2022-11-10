import React from 'react';
import photographer from '../../../../assets/20482.jpg'

const About = () => {
    return (
        <div className='bg-sky-900 py-4'>
            <img src="" alt="" />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:mx-0 mx-16'>
                <img src={photographer} className="w-full h-full md:col-span-1" alt="" />
                <p className='lg:col-span-2 md:col-span-1 ml-4 md:mt-0 mt-3'>Thomas Marent was born in 1966 in Baden, Switzerland. During his childhood he developed a strong fascination for nature and wildlife. When he bought his first camera at the age of 16, he became as passionate about photography.At the age of 23, Marent first set foot into a rainforest in Australia: “It was rainy season and the forest was bursting with life. It was hot, humid, noisy and completely exhilarating, but most exciting of all was the wildlife. I was immediately hooked. There and then, I made up my mind to explore rainforests throughout the world”. And so he did. Since that first expedition, he has explored rainforests all over the world.His initial dream was to publish a book on his work.</p>
            </div>
        </div>
    );
};

export default About;