import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import fetchContinentCountries from '../../redux/apiCall';
import DisplayCountries from '../countries/DisplayCountries';
import './continents.css';
import worldMap from '../../assets/wrld-17.svg';

const Continents = ({
  searchCountry, onSetCountries, onSetCountry, onSetSearchEmpty, onSetContinentMap,
}) => {
  const continArr = [];
  const continNames = [];
  const continNamesCorrect = [];

  const dispatch = useDispatch();

  const continents = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchContinentCountries('europe'));
    dispatch(fetchContinentCountries('asia'));
    dispatch(fetchContinentCountries('africa'));
    dispatch(fetchContinentCountries('north america'));
    dispatch(fetchContinentCountries('central america'));
    dispatch(fetchContinentCountries('south america'));
    dispatch(fetchContinentCountries('australia and new zealand'));
  }, []);

  _.forOwn(continents, (values, keys) => {
    continArr.push(values);
    continNames.push(keys);
  });

  const correctNames = (arr) => continNamesCorrect.push(
    arr.map((el) => {
      const result = el.replace(/([A-Z])/g, ' $1');
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return continNamesCorrect.push(finalResult);
    }),
  );

  correctNames(continNames);

  const prepareCountries = (string) => {
    const result = string.split(' ').join('');
    const finalResult = result[0].toLowerCase() + result.slice(1);
    return finalResult;
  };

  const showCountries = (e) => {
    const setCon = _.pickBy(continents, (_, key) => key === prepareCountries(e.target.textContent));
    const finalCountries = Object.values(setCon);
    onSetCountries(...finalCountries);
    onSetContinentMap(prepareCountries(e.target.textContent));
  };

  const showCountryFiltered = (e) => {
    const setCountry = searchCountry.filter(
      (country) => country.name.common === e.target.textContent,
    );
    const finalCountry = setCountry[0];
    onSetCountry(finalCountry);
    onSetSearchEmpty([]);
  };

  return (
    <div className="Continents">
      <img className="Continents__img" src={worldMap} alt="world-map" />
      {searchCountry.length && searchCountry.length !== 195 ? (
        <DisplayCountries name={searchCountry} showCountry={showCountryFiltered} />
      ) : (
        <ul className="Continents__list">
          {continArr.map((continent, index) => (
            <li key={uuidv4()} className="Continents__list_items">
              <Link to="/countries" onClick={showCountries} className="Continents__list_items_name">
                <p name="continent">{continNamesCorrect[index]}</p>
              </Link>
              <p>{continent.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Continents.propTypes = {
  searchCountry: PropTypes.instanceOf(Array),
  onSetCountries: PropTypes.func.isRequired,
  onSetCountry: PropTypes.func.isRequired,
  onSetSearchEmpty: PropTypes.func.isRequired,
  onSetContinentMap: PropTypes.func.isRequired,
};

Continents.defaultProps = {
  searchCountry: [],
};

export default Continents;
