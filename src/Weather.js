import React, {useState} from "react";
import './App.css';
import axios from "axios";

export default function Weather(props) {
    const [city, setCity] = useState("");
    //whether or not there is a result
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
    
    function showWeather(response) {
        setLoaded(true);
        setWeather({
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        })

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

    let form = <form onSubmit={handleSubmit}><input className="input-window" type="search" placeholder="Enter a cifty" onChange={updateCity}/>
    <input class="search-button" type="submit" value="Search"/>
    <button className="current-button">Current</button>
    </form>;

    if (loaded) {
        return (
            <div className="container">
            {form}
            <div className="row">
            <div className="col-6 text-left">
            <h1 className="text-left">{weather.city}</h1>
            <li className="text-left">Monday 7:00</li>
            <li className="text-left">Description: {weather.description}</li>
            <li className="text-left temperature">{Math.round(weather.temperature)}<a href="#" className="celsius-link">°C</a> | <a href="#" className="fahrenheit-link">°F</a></li>
            
            <img src={weather.icon} alt="weather icon" />
            </div>
            <div className="col-6">
            <li className="text-right">Humidity: {weather.humidity}%</li>
            <li>Wind speed: {weather.wind}km/h</li>
            </div>
            </div>
            </div>
        );
    } else {
    return form;
}
}