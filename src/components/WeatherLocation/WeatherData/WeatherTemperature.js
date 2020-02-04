import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,SUN,CLOUDY,RAIN,WINDY,SNOW,THUNDER,DRIZZLE
   } from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY] : " cloudy ",
    [SUN] :"day-sunny",
    [RAIN]:"rain",
    [SNOW] :"snow",
    [WINDY] :"windy",
    [THUNDER]:"day-thunderstore",
    [DRIZZLE]:"day-showers"
};
const getWeatherIcon = weatherState =>{
    console.log(icons['cloud']); 
    const icon = icons[weatherState];
    const size = "4x";
    
    console.log(icon);
    
    if (icon) {
        return <WeatherIcons className="wicon" name={icon} size={size}></WeatherIcons>;
    }else{
        return <WeatherIcons className="wicon" name={"day-sunny"} size={size}></WeatherIcons>;
    }
   
}
const WeatherTemperature = ({temperatura,weatherState})=> (
    <div className="weatherTempCont">
     {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperatura}`}</span>
    <span className="temperatureType">{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperatura : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
}

export default WeatherTemperature;