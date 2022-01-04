import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";

export default function CurrentLocation(props) {
  const [currentLocation, setCurrentLocation] = useState({ ready: false });

  function showWeather(response) {
    setCurrentLocation({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      //Acquiring UNIX time (date and time), need * 1000 because the unit is ms.
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  /*get users current location*/
  function searchLocation(position) {
    let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`;
    let lati = position.coords.latitude;
    let longi = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (currentLocation.ready) {
    return (
      <div className="container">
        <input
          className="current-button"
          type="submit"
          value="Current"
          onClick={getLocation}
        />{" "}
      </div>
    );
  }
}
