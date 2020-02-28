import React from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";
import './styles.css';
//import WeatherData from "./WeatherLocation/WeatherData";

const LocationList = ({ cities , onSelectedLocation }) => {
  const handleWeatherLocationClick = city =>{
      console.log("handleWeatherLocationClick",city);
      onSelectedLocation(city);
  }
  const strToComponents = cities =>
    cities.map((city, index) => (
      <WeatherLocation 
      key={city.key} 
      city={city.name}
      onWeatherLocationClick={()=>handleWeatherLocationClick(city.name)}
      data={city.data}
      ></WeatherLocation>
    ));
  return <div className="locationList">{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default LocationList;
