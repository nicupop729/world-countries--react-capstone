/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Countries = ({ countries, onSetCountry }) => {
  const showCountry = (e) => {
    const setCountry = countries.filter(
      (country) => country.name.common === e.target.textContent,
    );
    const finalCountry = setCountry[0];
    onSetCountry(finalCountry);
  };

  return (
    <div>
      <h1>let see</h1>
      <ul>
        {countries.map((country) => (
          <li key={uuidv4()}>
            <Link to="/country" onClick={showCountry}>
              <h1>{country.name.common}</h1>
              <img src={country.flags.png} alt="country-flag" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
