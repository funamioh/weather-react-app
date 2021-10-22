import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
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
            //Acquiring UNIX time (date and time), need * 1000 because the unit is ms.
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
    

    if (weather.ready) {
        return (
            <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-6 text-left">
                <input className="input-window" type="search" placeholder="Enter a cifty" onChange={updateCity} autoFocus="on" />
            </div>
            <div className="col-6">
            <input className="search-button" type="submit" value="Search" />
           </div></div>
            </form>
            <WeatherInfo data={weather} />
            </div> 
        );
    } else {
    return "Loadgin...";
}
}