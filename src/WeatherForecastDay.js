import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.min);
    return `${temperature}°`;
  }
    return (
      <div>
      <div className="WeatherForecast-day">
        {props.data.dt}
        </div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
        {props.data.temp.max}°</span> 
        <span className="WeatherForecast-temperature-min">{props.data.temp.min}°</span>
      </div>
      </div>
    );
}