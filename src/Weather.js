import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoading from "./skeletons/SkeletonLoading";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [address, setAddress] = useState(props.defaultCity);
  const [latitude, setLatitude] = useState({ lat: null });
  const [longitude, setLongitude] = useState({ lng: null });
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response);
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
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
    let units = "metric";
    let lati = position.coords.latitude;
    let longi = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  //reverse geocoding//
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function search() {
    let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latitude = await getLatLng(results[0].geometry.location.lat());
    const longitude = await getLatLng(results[0].geometry.location.lng());
    console.log(results[0]);
    setAddress(value);
    setLatitude(latitude);
    setLongitude(longitude);
    search();
  };
  if (weather.ready) {
    const searchOptions = {
      types: ["(cities)"],
    };
    return (
      <div className="container">
        <form>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places...",
                    className: "location-search-input",
                  })}
                />
                <button
                  className="current-button"
                  type="submit"
                  value="Current"
                  onClick={getLocation}
                >
                  Current
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </button>{" "}
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    const style = suggestion.active
                      ? { backgroundColor: "#ffb6b9", cursor: "pointer" }
                      : { backgroundColor: "#fafafa", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </form>
        <WeatherInfo data={weather} />
        <hr />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return <SkeletonLoading />;
  }
}
