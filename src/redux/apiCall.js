import {
  fetchFailedAfrica,
  storeCountriesAfrica,
} from './continents/countriesAfrica';
import {
  storeCountriesAsia,
  fetchFailedAsia,
} from './continents/countriesAsia';
import {
  fetchFailedCentralAmerica,
  storeCountriesCentralAmerica,
} from './continents/countriesCentralAmerica';
import {
  storeCountriesEurope,
  fetchFailedEurope,
} from './continents/countriesEurope';
import {
  fetchFailedNorthAmerica,
  storeCountriesNorthAmerica,
} from './continents/countriesNorthAmerica';
import {
  fetchFailedOceania,
  storeCountriesOceania,
} from './continents/countriesOceania';
import {
  fetchFailedSouthAmerica,
  storeCountriesSouthAmerica,
} from './continents/countriesSouthAmerica';

const fetchContinentCountries = (continent) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/subregion/${continent}`,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      },
    );
    const responseData = await response.json();

    if (continent === 'asia') dispatch(storeCountriesAsia(responseData));
    if (continent === 'europe') dispatch(storeCountriesEurope(responseData));
    if (continent === 'australia and new zealand') {
      dispatch(storeCountriesOceania(responseData));
    }
    if (continent === 'africa') dispatch(storeCountriesAfrica(responseData));
    if (continent === 'south america') {
      dispatch(storeCountriesSouthAmerica(responseData));
    }
    if (continent === 'north america') {
      dispatch(storeCountriesCentralAmerica(responseData));
    }
    if (continent === 'central america') {
      dispatch(storeCountriesNorthAmerica(responseData));
    }
  } catch (error) {
    if (continent === 'asia') dispatch(fetchFailedAsia());
    if (continent === 'europe') dispatch(fetchFailedEurope());
    if (continent === 'australia and new zealand') {
      dispatch(fetchFailedOceania());
    }
    if (continent === 'africa') dispatch(fetchFailedAfrica());
    if (continent === 'south america') dispatch(fetchFailedSouthAmerica());
    if (continent === 'central america') dispatch(fetchFailedCentralAmerica());
    if (continent === 'north america') dispatch(fetchFailedNorthAmerica());
  }
};

export default fetchContinentCountries;
