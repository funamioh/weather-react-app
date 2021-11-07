import React, { useState } from "react";

export default function WeatherTemperature
(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }
    function showCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }

    function fahrenheit(event) {
      return(props.celsius * 9/5)+32;
    }

    if (unit === "celsius" ) {
    return (
        <div className="WeatherTemperature">
        <span className="float-left temperature">{Math.round(props.celsius)}</span><a href="/#" className="unit">°C</a>{" "}<span className="separation">|</span><a href="/#" onClick={showFahrenheit} className="unit">°F</a>
        </div>
    );
} else {
    return (
        <div className="WeatherTemperature">
          <span className="float-left temperature">{Math.round(fahrenheit())}</span>
        <span>
        <a href="/#" onClick={showCelsius} className="unit">°C</a>
        </span>
        <span class="separation">|</span><a href="/#" className="unit">°F</a>{" "}
        </div>
    );
}
}