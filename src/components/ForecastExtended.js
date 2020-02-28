import React  from 'react';
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import ForecasItem from './ForecastItem';

import './styles.css';

const renderForecastItemsDays=(forecastData)=>{
    console.log("ESte es FORECASTADATA",forecastData);
    
    return forecastData.map(forecast =>(
    <ForecasItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}
        > </ForecasItem>));
}
const renderProgress=()=>{
    return (<CircularProgress color="secondary" size={50} />);
}


const ForecastExtended=({city,forecastData})=> (
    

        <div>
            <h2 className="forecast-title">
            Pronostico extendido para :{city}
            </h2>
            {forecastData ? 
            renderForecastItemsDays(forecastData):
            renderProgress()}
        </div>
    
    

);

ForecastExtended.propTypes ={
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
}

export default ForecastExtended;