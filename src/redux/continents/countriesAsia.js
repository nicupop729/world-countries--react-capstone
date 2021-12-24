const FETCH_SUCCES_ASIA = 'CONTINENTS/FETCH_SUCCES/ASIA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/ASIA';

const initialState = [];

export const storeCountriesAsia = (payload) => ({
  type: FETCH_SUCCES_ASIA,
  payload,
});

export const fetchFailedAsia = () => ({
  type: FETCH_FAILED,
});

const reducerAsia = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_ASIA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerAsia;
