import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
    console.log(response);
    }

  let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);

  return <div className="WeatherForecast"> 
    <div className="row">
      <div className="col">
      <div className="WeatherForecast-day">
        Thu
        </div>
        <WeatherIcon code="01d" size={52}/>
        <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
        19</span> 
        <span className="WeatherForecast-temperature-min">10</span>
      </div>
      </div>
      </div>
      </div>

      
}
