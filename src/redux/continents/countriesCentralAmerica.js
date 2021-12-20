const FETCH_SUCCES_CENTRAL_AMERICA = 'CONTINENTS/FETCH_SUCCES/CENTRAL_AMERICA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/CENTRAL_AMERICA';

const initialState = [];

export const storeCountriesCentralAmerica = (payload) => ({
  type: FETCH_SUCCES_CENTRAL_AMERICA,
  payload,
});

export const fetchFailedCentralAmerica = () => ({
  type: FETCH_FAILED,
});

const reducerCentralAmerica = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_CENTRAL_AMERICA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerCentralAmerica;
