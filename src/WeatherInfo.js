import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <div className="row mb-4">
          <div className="col-12 col-sm-6">
            <FormatDate date={props.data.date} />
            <li className="text-left text-capitalize">
              Description: {props.data.description}
            </li>
          </div>
          <div className="col-12 col-sm-6">
            <li className="text-right">Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}km/h</li>
          </div>
        </div>
        <WeatherIcon code={props.data.icon} size={60} />
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
    </div>
  );
}
