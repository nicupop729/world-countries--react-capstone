const FETCH_SUCCES_SOUTH_AMERICA = 'CONTINENTS/FETCH_SUCCES/SOUTH_AMERICA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/SOUTH_AMERICA';

const initialState = [];

export const storeCountriesSouthAmerica = (payload) => ({
  type: FETCH_SUCCES_SOUTH_AMERICA,
  payload,
});

export const fetchFailedSouthAmerica = () => ({
  type: FETCH_FAILED,
});

const reducerSouthAmerica = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_SOUTH_AMERICA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerSouthAmerica;
