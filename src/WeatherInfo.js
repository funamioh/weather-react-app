import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
          <div className="WeatherInfo">
            <div className="row">
            <div className="col-6 text-left">
            <h1 className="text-left">{props.data.city}</h1>
            <FormatDate date={props.data.date} />
            <li className="text-left text-capitalize">Description: {props.data.description}</li>
            <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div className="col-6">
            <li className="text-right">Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}km/h</li>
            </div>
            </div>
           <WeatherTemperature celsius={props.data.temperature}/>
            </div>
    );
}