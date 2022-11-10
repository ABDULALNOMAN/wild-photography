import React from 'react';
import Card from './Card/Card';
import Slider from './Slider/Slider';
import {Helmet} from "react-helmet";
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <About></About>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>
    );
};

export default Home;