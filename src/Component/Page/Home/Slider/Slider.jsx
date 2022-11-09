import React from 'react';
import Helmet from 'react-helmet';
import img1 from '../../../../assets/beautiful-tropical-beach-sea.jpg'
import img2 from '../../../../assets/travel-concept-with-landmarks.jpg'
import './Slider.css'


const Slider = () => {
    return (
        <div className='bg-blue-600'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative bg-img-1 img-utilite">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div  id="slide2" className="carousel-item relative bg-img-2 img-utilite">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative bg-img-3 img-utilite">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
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