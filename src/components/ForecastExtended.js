import React ,{Component} from 'react';
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import ForecasItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';
/*
const data ={
    temperature:20,
    humidity:10,
    weatherState:'normal',
    wind:'normal'
}
const days=[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]*/
const api_key= "8a5463bac2bac709b43138cd89291647";
const url_base_forecast="https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state={
            forecastData:null
        }
    }
    componentDidMount(){
        
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }
    updateCity = city =>{
               //fetch or axios
               const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
               //console.log("urlapi",api_weather);
              fetch(url_forecast)
               .then(data=> {
                   return data.json();
               }).then(weatherdata=>{
                   console.log(weatherdata);  
                   const forecastData= transformForecast(weatherdata);
                   console.log("data del forecastextended:",forecastData)
                   this.setState({
                       forecastData
                   });
               })
    }

    renderForecastItemsDays (forecastData){
        
        
        
        return forecastData.map(forecast =>(
        <ForecasItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}
            > </ForecasItem>));
    }
    renderProgress(){
        return (<CircularProgress color="secondary" size={50} />);
    }

    render (){
        const city = this.props.city;
        const {forecastData}=this.state;
        return(
        <div>
            <h2 className="forecast-title">
            Pronostico extendido para :{city}
            </h2>
            {forecastData ? this.renderForecastItemsDays(forecastData):
            this.renderProgress()}
        </div>
        );
    }

}

ForecastExtended.propTypes ={
    city:PropTypes.string.isRequired,
}

export default ForecastExtended;