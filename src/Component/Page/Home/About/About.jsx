import React from 'react';
import photographer from '../../../../assets/20482.jpg'
import {ImFacebook2} from 'react-icons/im';
import {AiFillInstagram} from 'react-icons/ai';


const About = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-xl capitalize'>about</h1>
                <h3 className='text-2xl mt-3'>description of a wildlife photographer</h3>
            </div>
            <div className='bg-cyan-900 border-r-8 border-r-yellow-500 my-8'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:mx-0 mx-8 py-8'>
                    <img src={photographer} className="w-full h-full md:col-span-1" alt="" />
                    <div className='lg:col-span-2 md:col-span-1 lg:mx-4  md:mt-0 py-4'>
                        <div className='flex justify-between items-start py-4'>
                            <div>
                                <h1 className='text-3xl font-bebas'>Thomas Marent</h1>
                                <p className='leading-3'>professional photographer</p>
                            </div>
                            <h3>wild photographer</h3>
                        </div>
                        <p className='border-b-4 my-2'></p>
                        <p>Thomas Marent was born in 1966 in Baden, Switzerland. During his childhood he developed a strong fascination for nature and wildlife. When he bought his first camera at the age of 16, he became as passionate about photography.At the age of 23, Marent first set foot into a rainforest in Australia: “It was rainy season and the forest was bursting with life. It was hot, humid, noisy and completely exhilarating, but most exciting of all was the wildlife. I was immediately hooked. There and then, I made up my mind to explore rainforests throughout the world”. And so he did. Since that first expedition, he has explored rainforests all over the world.His initial dream was to publish a book on his work.</p>
                        <p className='border-b-2 my-2'></p>
                        <div className='grid grid-cols-3 justify-evenly items-center'>
                            <div className='flex flex-col justify- items-center'>
                                <p className='first-letter:text-3xl text-xl capitalize first-letter:text-blue-400 font-bebas'>facebook</p>
                                <p className="text-2xl">25.6K</p>
                                <p className="text-lg">follower</p>
                            </div>
                            <div className='flex justify-center flex-col items-center'>
                                <div className='flex items-start'>
                                    <i><AiFillInstagram className='text-3xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'></AiFillInstagram></i>
                                    <div className='ml-2 text-center'>
                                        <p className="text-2xl ">10.3K</p>
                                        <p className="text-md">follower</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-xl capitalize'>
                                <h2>baden</h2>
                                <h4>Switzerland</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;