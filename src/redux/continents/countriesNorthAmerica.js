const FETCH_SUCCES_NORTH_AMERICA = 'CONTINENTS/FETCH_SUCCES/NORTH_AMERICA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/NORTH_AMERICA';

const initialState = [];

export const storeCountriesNorthAmerica = (payload) => ({
  type: FETCH_SUCCES_NORTH_AMERICA,
  payload,
});

export const fetchFailedNorthAmerica = () => ({
  type: FETCH_FAILED,
});

const reducerNorthAmerica = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_NORTH_AMERICA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerNorthAmerica;
