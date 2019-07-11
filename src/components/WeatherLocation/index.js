import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weathers';
import './style.css';

const location = "Ecuador";
const api_key = "bfbc342dfb0ee6b54c2bd0cb5ffd0c68";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Ecuador, Guayaquil!',
            data: data1
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        });

        this.setState({
            city: 'Ecuador, Manabí!',
            data: data2
        });
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div className="WeatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button className="btn" onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;

