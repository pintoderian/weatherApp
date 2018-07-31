import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const WeatherLocation = () => (
    <div className="WeatherLocationCont">
        <Location city={'Ecuador, Guayaquil!'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;

