import { createStore } from "redux";
import {city} from './../reducers/city';
//generamos el estado inicial de la aplicación(si no ponemos nada da error)
const initialState = {
    city:'Buenos Aires,ar'
}
//generamos el reducer que tiene 2 params state(estado de la app) y las acciones que generamos

export const store = createStore(city,initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());