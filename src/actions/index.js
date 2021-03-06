import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

// este es un actionCreator que le llamamos setCity
const setCity = payload => ({ type: SET_CITY, payload });
// este es un actionCreator que le llamamos setCity
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const api_key = "8a5463bac2bac709b43138cd89291647";
const url_base_forecast = "https://api.openweathermap.org/data/2.5/forecast";
const url_weather = "https://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
  return dispatch => {
    //fetch or axios
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
    console.log("urlapi", payload);
    //activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));
    return fetch(url_forecast)
      .then(data => {
        return data.json();
      })
      .then(weatherdata => {
        console.log("esto es weatherdata ACTION", weatherdata);
        console.log("esto es weatherdata ACTION PAYLOAD", payload);
        const forecastData = transformForecast(weatherdata);
        console.log("data del forecastextended:", forecastData);
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;

      return fetch(api_weather)
        .then(data => {
          return data.json();
        })
        .then(weather_data => {
          const weather = transformWeather(weather_data);

          dispatch(setWeatherCity({ city, weather }));
        });
    });
  };
};