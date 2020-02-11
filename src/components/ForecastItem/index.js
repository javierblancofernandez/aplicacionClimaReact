import React from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData";

/* const data ={
    temperature:10,
    humidity:10,
    weatherState:'normal',
    wind:'normal'
} */

const ForecasItem = ({ weekDay, hour,data }) => (
  <div>
    <h2>
      {weekDay}  {hour}hs
    </h2>
    <WeatherData data={data}></WeatherData>
  </div>
);

ForecasItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data : PropTypes.shape(
    { 
      temperature:PropTypes.number.isRequired,
      weatherState:PropTypes.string.isRequired,
      humidity:PropTypes.number.isRequired,
      wind:PropTypes.string.isRequired,}
    )
};

export default ForecasItem;
