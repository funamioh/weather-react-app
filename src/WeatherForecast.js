import React, { useState, useEffect, useLayoutEffect } from "react";
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
    // if the coordinates change
    //set loaded false
    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);
    
function load() {
    let apiKey = `b16e4cc8e76040cdfe4ae29b0af21854`
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
}

  if (loaded) {
  return <div className="WeatherForecast"> 
    <div className="row">
      {forecast.map(function (dailyForecast, index) {
        if (index < 5) {
        return(
          <div className="col" key={index}>
        <WeatherForecastDay data={dailyForecast} />
      </div>
        );
        } else {
          return null;
        }
      })}
      </div>
      </div>
  } else {
    load();
}
}