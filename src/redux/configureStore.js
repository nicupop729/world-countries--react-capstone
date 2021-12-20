import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerAsia from './continents/countriesAsia';
import reducerEurope from './continents/countriesEurope';
import reducerOceania from './continents/countriesOceania';
import reducerAfrica from './continents/countriesAfrica';
import reducerSouthAmerica from './continents/countriesSouthAmerica';
import reducerCentralAmerica from './continents/countriesCentralAmerica';
import reducerNorthAmerica from './continents/countriesNorthAmerica';

const reducer = combineReducers({
  reducerAsia,
  reducerEurope,
  reducerOceania,
  reducerAfrica,
  reducerSouthAmerica,
  reducerCentralAmerica,
  reducerNorthAmerica,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
