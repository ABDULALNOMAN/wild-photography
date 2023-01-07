import React from 'react';
import Card from './Card/Card';
import Slider from './Slider/Slider';
import About from './About/About';
import Gallary from './Gallary';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Gallary></Gallary>
            <About></About>
        </div>
    );
};

export default Home;