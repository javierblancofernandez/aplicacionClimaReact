import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import WeatherData from "./WeatherLocation/WeatherData";

const strToComponents = cities =>
  cities.map(city => <WeatherLocation city={city}></WeatherLocation>);

const LocationList = ({ cities }) => <div>{strToComponents(cities)}</div>;

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default LocationList;
