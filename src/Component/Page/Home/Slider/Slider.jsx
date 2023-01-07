import React from 'react';
import './Slider.css'


const Slider = () => {
    return (
        <div className='bg-blue-600'>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative bg-img-1 img-utilite w-full">
                    <div className='container mx-auto'>
                        <div className='top-44 mt-28 text-center w-9/12 mx-auto'>
                            <h1 className='text-center lg:text-8xl md:text-7xl text-6xl font-semibold text-slate-300 font-ZenDots capitalize font-bebas'>wildlife and natural <br /> <span className='text-yellow-600'>geography</span></h1>
                            <p className='lg:text-lg text-normal my-6 capitalize '>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div className='flex items-center justify-center'>
                                <input type="text" className='input rounded-none bg-black' placeholder='search' />
                                <button className='btn rounded-none bg-orange-700 border-none hover:bg-orange-800 text-white'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between md:transform-translate-y-1/2 md:left-5 ,md:right-5 md:top-1/2 bottom-3 right-3 mx-auto md:w-11/12 w-20 ">
                        <a href="#slide3" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❮</a>
                        <a href="#slide2" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative bg-img-2 img-utilite">
                    <div className='container mx-auto'>
                        <div className='top-44 mt-28 text-center w-9/12 mx-auto'>
                            <h1 className='text-center lg:text-8xl md:text-7xl text-6xl  font-semibold text-slate-300 font-bebas'>wildlife and <span className='text-orange-700'>natural</span> <br /> geography</h1>
                            <p className='lg:text-lg text-normal my-6'>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div className='flex items-center justify-center'>
                                <input type="text" className='input rounded-none bg-black' placeholder='search' />
                                <button className='btn rounded-none bg-orange-700 border-none hover:bg-orange-800 text-white'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between md:transform-translate-y-1/2 md:left-5 ,md:right-5 md:top-1/2 bottom-3 right-3 mx-auto md:w-11/12 w-20">
                        <a href="#slide1" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❮</a>
                        <a href="#slide3" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative bg-img-3 img-utilite">
                    <div className='container mx-auto'> 
                        <div className='top-44 mt-28 text-center lg:w-9/12 w-10/12 mx-auto'>
                            <h1 className='text-center lg:text-8xl md:text-7xl text-6xl  font-semibold text-slate-300 font-bebas'><span  className='text-amber-700'>wildlife</span> and natural <br /> geography</h1>
                            <p className='lg:text-lg text-normal my-6'>there are more than thousand wild animals in the world.we dont konow about then .we are working for these wildlife.which help us to know about wildlife</p>
                            <div className='flex items-center  justify-center'>
                                <input type="text" className='input rounded-none bg-black' placeholder='search' />
                                <button className='btn rounded-none bg-orange-700 border-none hover:bg-orange-800 text-white'>click</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between md:transform-translate-y-1/2 md:left-5 ,md:right-5 md:top-1/2 bottom-3 right-3 mx-auto md:w-11/12 w-20">
                        <a href="#slide2" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❮</a>
                        <a href="#slide1" className="md:text-3xl text-2xl md:w-10 md:h-10 w-8 h-8 bg-black rounded-full items flex items-center justify-center">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;