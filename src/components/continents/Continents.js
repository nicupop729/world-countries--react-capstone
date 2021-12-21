/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import fetchContinentCountries from '../../redux/apiCall';
import './continents.css';

const Continents = ({ onSetCountries }) => {
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
    // eslint-disable-next-line max-len
    const setCountries = _.pickBy(continents, (value, key) => key === prepareCountries(e.target.textContent));
    const finalCountries = Object.values(setCountries);
    onSetCountries(...finalCountries);
  };

  return (
    <div>
      <ul>
        {continArr.map((continent, index) => (
          <li key={uuidv4()}>
            <Link to="/countries" onClick={showCountries}>
              <p name="continent">{continNamesCorrect[index]}</p>
            </Link>
            <h2>{continent.length}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
