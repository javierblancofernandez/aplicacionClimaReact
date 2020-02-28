import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import reducers from './../reducers';
//generamos el estado inicial de la aplicación(si no ponemos nada da error)
const initialState = {
    city:'Buenos Aires,ar'
};
//generamos el reducer que tiene 2 params state(estado de la app) y las acciones que generamos

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,initialState,composeEnhancers(applyMiddleware(thunk)));
