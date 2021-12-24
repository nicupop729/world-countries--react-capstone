const FETCH_SUCCES_AFRICA = 'CONTINENTS/FETCH_SUCCES/AFRICA';
const FETCH_FAILED = 'CONTINENTS/FETCH_FAILED/AFRICA';

const initialState = [];

export const storeCountriesAfrica = (payload) => ({
  type: FETCH_SUCCES_AFRICA,
  payload,
});

export const fetchFailedAfrica = () => ({
  type: FETCH_FAILED,
});

const reducerAfrica = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCES_AFRICA:
      return payload;
    case FETCH_FAILED:
      return {
        error: 'Failed to fetch data :(  please try to reload the page',
      };
    default:
      return state;
  }
};

export default reducerAfrica;
