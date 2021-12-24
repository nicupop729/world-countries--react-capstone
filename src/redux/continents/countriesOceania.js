const FETCH_SUCCES_OCEANIA = 'CONTINENTS/FETCH_SUCCES/OCEANIA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/OCEANIA';

const initialState = [];

export const storeCountriesOceania = (payload) => ({
  type: FETCH_SUCCES_OCEANIA,
  payload,
});

export const fetchFailedOceania = () => ({
  type: FETCH_FAILED,
});

const reducerOceania = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_OCEANIA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerOceania;
