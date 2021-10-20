import React, {useState} from "react";
import FormatDate from "./FormatDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});
    
    function showWeather(response) {
        console.log(response.data);
        setWeather({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        });

    }
    
    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`;
        let units = "metric"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(showWeather);
    }
    
    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = <form onSubmit={handleSubmit}><input className="input-window" type="search" placeholder="Enter a cifty" onChange={updateCity} autoFocus="on" />
    <input className="search-button" type="submit" value="Search" />
    <button className="current-button">Current</button>
    </form>;

    if (weather.ready) {
        return (
            <div className="container">
            {form}
            <div className="row">
            <div className="col-6 text-left">
            <h1 className="text-left">{weather.city}</h1>
            <FormatDate date={weather.date} />
            <li className="text-left text-capitalize">Description: {weather.description}</li>
            </div>
            <div className="col-6">
            <li className="text-right">Humidity: {weather.humidity}%</li>
            <li>Wind speed: {weather.wind}km/h</li>
            </div>
            </div>
            <div className="row">
            <div className="col-6">
            <div className="clearfix">
            <img src={weather.icon} alt="weather icon" className="float-left"/>
             <span className="float-left temperature">{Math.round(weather.temperature)}<button href="" className="unit">°C</button> | <button href="" className="unit">°F</button></span>
            </div></div></div>
            
            </div> 
        );
    } else {
    return form;
}
}