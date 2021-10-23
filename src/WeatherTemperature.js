import React, { useState } from "react";

export default function WeatherTemperature
(props) {
    const [unit, setUnit] = useState("celsius");
    if (unit === "celsius" ) {
    return (
        <span>
        <span className="float-left temperature">{Math.round(props.celsius)}</span><button href="/" className="unit">°C</button> | <button href="/" className="unit">°F</button>
        </span>
    );
} else {
    return "F"
}
}