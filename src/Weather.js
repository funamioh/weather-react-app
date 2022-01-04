import React, { useState } from "react";
import CurrentLocation from "./CurrentLocation";
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

export default function Weather(props) {
  const [address, setAddress] = useState(props.defaultCity);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: address,
      //Acquiring UNIX time (date and time), need * 1000 because the unit is ms.
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);

    setAddress(value);
    setCoordinates(ll);

    console.log(address);
    console.log(coordinates);
    search();
  };

  if (weather.ready) {
    return (
      <div className="container">
        <form>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
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
                    types: ["(cities)"],
                  })}
                />
                <CurrentLocation />
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
