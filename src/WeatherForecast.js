import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

  let apiKey = `b16e4cc8e76040cdfe4ae29b0af21854`
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  if (loaded) {
  return <div className="WeatherForecast"> 
    <div className="row">
      <div className="col">
      <div className="WeatherForecast-day">
        Thu
        </div>
        <WeatherIcon code="01d" size={52}/>
        <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
        {forecast[0].temp.max}°</span> 
        <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
      </div>
      </div>
      </div>
      </div>

  }  
}
