import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
          <div className="WeatherInfo">
            <div className="row">
            <div className="col-6 text-left">
            <h1 className="text-left">{props.data.city}</h1>
            <FormatDate date={props.data.date} />
            <li className="text-left text-capitalize">Description: {props.data.description}</li>
            </div>
            <div className="col-6">
            <li className="text-right">Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}km/h</li>
            </div>
            </div>
            <div className="row">
            <div className="col-6">
            <div className="clearfix">
            <img src={props.data.icon} alt="weather icon" className="float-left"/>
             <span className="float-left temperature">{Math.round(props.data.temperature)}</span><button href="" className="unit">°C</button> | <button href="" className="unit">°F</button>
            </div>
            </div>
            </div>
            </div>
            

    );
}