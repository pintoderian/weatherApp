import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weathers';
import './style.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19 m/s',
};

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Ecuador, Guayaquil!',
            data: data1
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'Ecuador, Manabí!',
            data: data2
        });
        console.log('actualizado!');
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div className="WeatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;

