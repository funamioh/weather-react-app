import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
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
        <WeatherForecastDay data={forecast[0]} />
      </div>
      </div>
      </div>

  }  
}
