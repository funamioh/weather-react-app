import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});
    
    function showWeather(response) {
        setWeather({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            //Acquiring UNIX time (date and time), need * 1000 because the unit is ms.
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
        });

    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }
    function search() {
        let apiKey = `b16e4cc8e76040cdfe4ae29b0af21854`;
        let units = "metric"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(showWeather);
    } 

    /*get users current location*/
    function searchLocation(position) {
        let apiKey = `b16e4cc8e76040cdfe4ae29b0af21854`;
        let lati = position.coords.latitude;
        let longi = position.coords.longitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(showWeather);

    }
    function getLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
    }

    if (weather.ready) {
        return (
            <div className="container">
            <form onSubmit={handleSubmit}>
                <input className="input-window" type="search" placeholder="Enter a city" onChange={updateCity} autoFocus="on" />
            <input className="search-button" type="submit" value="Search" />
             <input className="current-button" type="submit" value="Current" onClick={getLocation} />
            </form>
            <WeatherInfo data={weather} />
            <hr/>
            <WeatherForecast coordinates={weather.coordinates} />
            </div> 
        );
    } else {
    search();
    return "Loading...";
}
}