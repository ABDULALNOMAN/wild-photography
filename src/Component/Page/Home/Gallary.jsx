import React from 'react';
import video from '../../../assets/video/untitled-video-made-with-clipchamp-1-online-video-cuttercom-1_yisTThUb (online-video-cutter.com).mp4'

const Gallary = () => {
    return (
        <div className='h-[90vh] w-full relative my-8'>
            <div className="absolute z-30 w-full h-[100vh]">
                <div className='flex flex-col justify-center text-center items-center h-full lg:w-8/12 w-11/12 mx-auto'>
                    <h1 className='font-bold lg:text-8xl md:text-7xl text-6xl font-bebas'>Wildlife And Natural <span className='text-orange-600 font-bold'>Geography</span></h1>
                    <p className='lg:text-lg'>There Are More Than Thousand Wild Animals In The World.We Dont Konow About Then .We Are Working For These Wildlife.Which Help Us To Know About Wildlife At the National Geographic Society, we believe that exploration starts with you. That means when you give, 100 percent of your tax-deductible contribution will go directly to our Explorers working across our five key focus areas. Your support enables Explorers to make important discoveries, pursue historic achievements, and push the boundaries of innovation to build a better future.</p>
                </div>
            </div>
            <video className='brightness-[40%] h-full w-full top-0 left-0 object-cover' src={video} typeof='video/mp4' autoPlay loop muted >
            </video>
        </div>
    );
};

export default Gallary;