const FETCH_SUCCES_EUROPE = 'CONTINENTS/FETCH_SUCCES/EUROPE';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/EUROPE';

const initialState = [];

export const storeCountriesEurope = (payload) => ({
  type: FETCH_SUCCES_EUROPE,
  payload,
});

export const fetchFailedEurope = () => ({
  type: FETCH_FAILED,
});

const reducerEurope = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_EUROPE:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerEurope;
