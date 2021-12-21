import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchContinentCountries from '../../redux/apiCall';

const Continents = () => {
  const countriesAsia = useSelector((state) => state.reducerAsia);
  const countriesEurope = useSelector((state) => state.reducerEurope);
  const countriesOceania = useSelector((state) => state.reducerOceania);
  const countriesAfrica = useSelector((state) => state.reducerAfrica);
  const countriesSouthAmerica = useSelector(
    (state) => state.reducerSouthAmerica,
  );
  const countriesCentralAmerica = useSelector(
    (state) => state.reducerCentralAmerica,
  );
  const countriesNorthAmerica = useSelector(
    (state) => state.reducerNorthAmerica,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinentCountries('europe'));
    dispatch(fetchContinentCountries('asia'));
    dispatch(fetchContinentCountries('australia and new zealand'));
    dispatch(fetchContinentCountries('africa'));
    dispatch(fetchContinentCountries('south america'));
    dispatch(fetchContinentCountries('central america'));
    dispatch(fetchContinentCountries('north america'));
  }, [dispatch]);

  console.log('Asia: ', countriesAsia.length);
  console.log('Europe: ', countriesEurope.length);
  console.log('Oceania: ', countriesOceania.length);
  console.log('Africa: ', countriesAfrica);
  console.log('South America: ', countriesSouthAmerica.length);
  console.log('Central America: ', countriesCentralAmerica.length);
  console.log('North America: ', countriesNorthAmerica.length);

  return <h1>Hello world</h1>;
};

export default Continents;
