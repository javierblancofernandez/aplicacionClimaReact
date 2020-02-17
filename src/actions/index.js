import transformForecast from './../services/transformForecast';


export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
// este es un actionCreator que le llamamos setCity
const setCity = payload=>({type: SET_CITY, payload});
// este es un actionCreator que le llamamos setCity
const setForecastData = payload=> ({type:SET_FORECAST_DATA , payload });


const api_key= "8a5463bac2bac709b43138cd89291647";
const url_base_forecast="https://api.openweathermap.org/data/2.5/forecast";
export const setSelectedCity = payload =>{

    return dispatch => {
          //fetch or axios
          const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
          //console.log("urlapi",url_forecast);
          //activar en el estado un indicador de busqueda de datos
          dispatch(setCity(payload));
          return fetch(url_forecast)
          .then(data=> {
              return data.json();
              console.log("esto es data del fetch",data.json());
              
          }).then(weatherdata=>{
              console.log("esto es weatherdata ACTION",weatherdata);
              
              const forecastData= transformForecast(weatherdata);
              console.log("data del forecastextended:",forecastData)
              //modificar el estado con el resultado de la promise(fetch)
              dispatch(setForecastData({city:payload,forecastData}))
          })
          
    };
};