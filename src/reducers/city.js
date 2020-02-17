import {SET_CITY}  from './../actions';
// SET_CITY es como se llama nuestra action
export const city=(state={},action)=>{
    switch (action.type) {
        case SET_CITY:
            
            return {...state,city:action.payload};
        default:
            return state;
    }
    
}