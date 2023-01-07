import React from 'react';
import Card from './Card/Card';
import Slider from './Slider/Slider';
import About from './About/About';
import Gallary from './Gallary';
import Photogallary from './Photogallary';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Gallary></Gallary>
            <Photogallary></Photogallary>
            <About></About>
        </div>
    );
};

export default Home;