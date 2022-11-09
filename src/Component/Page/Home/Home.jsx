import React from 'react';
import Card from './Card/Card';
import Slider from './Slider/Slider';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Card></Card>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>
    );
};

export default Home;