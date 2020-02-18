import {SET_FORECAST_DATA} from './../actions';

export const cities = (state={},action)=>{
    switch (action.type) {
        case SET_FORECAST_DATA:
            //hacemos destructuring
            const { city , forecastData} = action.payload;
            return {...state , [city]:{forecastData:forecastData,weather:null}}
            
    
        default:
            return state;
    }
};
// selectores se ponen en los reducers que es donde se conocen como esta el estado
export const getForecastDataFromCities = (state , city)=>state[city]&&state[city].forecastData;
//luego utilizo el selector desde el container en esta caso ForeCastExtendedContainer