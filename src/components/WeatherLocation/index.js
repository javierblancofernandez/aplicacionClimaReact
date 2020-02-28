import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
//import {api_weather} from './../../constants/api_url';
import Location from "./Location";
import WeatherData from "./WeatherData";
//import { SUN,RAIN } from "./../../constants/weathers";
//import transformWeather from "./../../services/transformWeather";
//import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import "./styles.css";

// const data = {
//   temperature: 6,
//   weatherState: RAIN,
//   humidity: 10,
//   wind: "10 m/S"
// };
// const data2 = {
//     temperature: 5,
//     weatherState: SUN,
//     humidity: 20,
//     wind: "20 m/S"
//   };

/* export const api_key= "8a5463bac2bac709b43138cd89291647";
export const url_base ="https://api.openweathermap.org/data/2.5/weather";
componentWillMount(){
  const {city} = this.state;
  const api_weather = `${url_base}?q=${city}&appid=${api_key}`;
  fetch(api_weather).this(data=>{
    return data.tojson();
  }).this(weather_data=>{
    const data = transformWeather(weather_data);
    this.setState({data});
  });
} */

const WeatherLocation =({onWeatherLocationClick,city,data})=> (

  /* handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    //console.log("urlapi",api_weather);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        //console.log("datos", data);
        const newWeather = transformWeather(data);
        //console.log("newWeather", newWeather);

        this.setState({
          data: newWeather
        });
      });
    //console.log("actualizado");
  }; */

      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? (
          <WeatherData data={data} />
        ) : (
          <CircularProgress color="secondary" size={50} />
        )}
      </div>
);
WeatherData.propTypes = {
  // city: PropTypes.string.isRequired,
  onWeatherLocationClick : PropTypes.func,
  onSelectedLocation:PropTypes.func,
  data : PropTypes.shape(
    { 
      temperature:PropTypes.number.isRequired,
      weatherState:PropTypes.string.isRequired,
      humidity:PropTypes.number.isRequired,
      wind:PropTypes.string.isRequired,}
    )
};
export default WeatherLocation;
