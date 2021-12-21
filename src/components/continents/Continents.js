import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import fetchContinentCountries from '../../redux/apiCall';
import './continents.css';

const Continents = () => {
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

  const continArr = [];
  const continNames = [];
  const continNamesCorrect = [];

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

  return (
    <div>
      <ul>
        {continArr.map((continent, index) => (
          <li key={Math.random()}>
            <Link to="/countries">
              {continNamesCorrect[index]}
              :
              {' '}
              {continent.length}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
