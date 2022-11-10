import React from 'react';
import Helmet from 'react-helmet';
import './Slider.css'


const Slider = () => {
    return (
        <div className='bg-blue-600'>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative bg-img-1 img-utilite w-full">
                    <div className='container mx-auto'>
                        <div className='top-44 mt-28 text-center'> 
                            <h1 className='text-center text-7xl font-semibold text-sky-200'>wildlife and natural <br /> geography</h1>
                            <p className='text-xl my-4'>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div>
                                <input type="text"className='input rounded-none bg-gray-500'placeholder='search' />
                                <button className='btn rounded-none btn-info'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-3xl">❮</a> 
                        <a href="#slide2" className="text-3xl">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative bg-img-2 img-utilite">
                    <div className='container mx-auto'>
                        <div className='top-44 mt-28 text-center'> 
                            <h1 className='text-center text-7xl font-semibold text-sky-200'>wildlife and natural <br /> geography</h1>
                            <p className='text-xl my-4'>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div>
                                <input type="text"className='input rounded-none bg-gray-500'placeholder='search' />
                                <button className='btn rounded-none btn-info'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-3xl">❮</a> 
                    <a href="#slide3" className="text-3xl">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative bg-img-3 img-utilite">
                    <div className='container mx-auto'>
                        <div className='top-44 mt-28 text-center'> 
                            <h1 className='text-center text-7xl font-semibold text-sky-200'>wildlife and natural <br /> geography</h1>
                            <p className='text-xl my-4'>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div>
                                <input type="text"className='input rounded-none bg-gray-500'placeholder='search' />
                                <button className='btn rounded-none btn-info'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-3xl">❮</a> 
                    <a href="#slide1" className="text-3xl">❯</a>
                    </div>
                </div> 
            </div>
            <Helmet>
                <tiltt>Home</tiltt>
            </Helmet>
        </div>
    );
};

export default Slider;