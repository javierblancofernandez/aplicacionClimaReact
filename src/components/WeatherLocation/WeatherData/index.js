import React from "react";
import PropTypes from "prop-types";
import WeatherExtrainfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

const WeatherData = ({ data :{temperature,weatherState,humidity,wind}}) => (
<div className="weatherDataCont">
<WeatherTemperature
  temperatura={temperature}
  weatherState={weatherState}
></WeatherTemperature>
<WeatherExtrainfo humidity={humidity} wind={wind}>
  {" "}
</WeatherExtrainfo>
</div>);

WeatherData.propTypes = {
data : PropTypes.shape(
{ 
  temperature:PropTypes.number.isRequired,
  weatherState:PropTypes.string.isRequired,
  humidity:PropTypes.number.isRequired,
  wind:PropTypes.string.isRequired,}
)
};

export default WeatherData;
