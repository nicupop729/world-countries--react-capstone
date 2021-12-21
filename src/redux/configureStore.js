import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import asia from './continents/countriesAsia';
import europe from './continents/countriesEurope';
import oceania from './continents/countriesOceania';
import africa from './continents/countriesAfrica';
import southAmerica from './continents/countriesSouthAmerica';
import centralAmerica from './continents/countriesCentralAmerica';
import northAmerica from './continents/countriesNorthAmerica';

const reducer = combineReducers({
  asia,
  europe,
  oceania,
  africa,
  southAmerica,
  centralAmerica,
  northAmerica,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
