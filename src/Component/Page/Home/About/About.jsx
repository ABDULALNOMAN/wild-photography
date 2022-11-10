import React from 'react';
import photographer from '../../../../assets/20482.jpg'

const About = () => {
    return (
        <div className='bg-sky-900'>
            <img src="" alt="" />
            <div className='flex justify-between items-center mx-4 h-full py-4'>
                <img src={photographer} className="w-4/12 h-full" alt="" />
                <p className='w-8/12 ml-4'>Thomas Marent was born in 1966 in Baden, Switzerland. During his childhood he developed a strong fascination for nature and wildlife. When he bought his first camera at the age of 16, he became as passionate about photography.At the age of 23, Marent first set foot into a rainforest in Australia: “It was rainy season and the forest was bursting with life. It was hot, humid, noisy and completely exhilarating, but most exciting of all was the wildlife. I was immediately hooked. There and then, I made up my mind to explore rainforests throughout the world”. And so he did. Since that first expedition, he has explored rainforests all over the world.His initial dream was to publish a book on his work. Around 1996, at the age of 30, Marent started to publish his photographs in numerous magazines, books and calendars. A formerly intensive hobby gradually developed into a thriving career as a wildlife photographer. His first book “Rainforest” was published in September 2006 and became a success: By now it has already been translated into 15 languages. Following that, in 2007 he published “Butterfly", in 2008 “Frog" and in 2009 “Life in the Wild". His latest book is dedicated to the rainforest primates all over the world.</p>
            </div>
        </div>
    );
};

export default About;