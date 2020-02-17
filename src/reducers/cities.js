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