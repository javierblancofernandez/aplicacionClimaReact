import React, { Component } from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
//import {api_weather} from './../../constants/api_url';
import Location from "./Location";
import WeatherData from "./WeatherData";
//import { SUN,RAIN } from "./../../constants/weathers";
import transformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
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

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
    
  }
  componentDidMount() {
    console.log("componentDidMount");

    this.handleUpdateClick();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    //console.log("ya estoy actualizado");
  }

  handleUpdateClick = () => {
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
  };
  render() {
    const {onWeatherLocationClick} = this.props;
    const { city, data } = this.state;
    console.log("esta es la ciudad",onWeatherLocationClick);
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? (
          <WeatherData data={data} />
        ) : (
          <CircularProgress color="secondary" size={50} />
        )}
        {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
      </div>
    );
  }
}
WeatherData.propTypes = {
  // city: PropTypes.string.isRequired,
  onWeatherLocationClick : PropTypes.func,
  onSelectedLocation:PropTypes.func,
};
export default WeatherLocation;
