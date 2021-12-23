/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Countries = ({
  searchCountry, countries, onSetCountry, onSetSearchEmpty,
}) => {
  const showCountry = (e) => {
    const setCountry = countries.filter(
      (country) => country.name.common === e.target.textContent,
    );
    const finalCountry = setCountry[0];
    onSetCountry(finalCountry);
  };

  const showCountryFiltered = (e) => {
    const setCountry = searchCountry.filter(
      (country) => country.name.common === e.target.textContent,
    );
    const finalCountry = setCountry[0];
    console.log(finalCountry);
    onSetCountry(finalCountry);
    onSetSearchEmpty([]);
  };

  return (
    <div>
      {searchCountry.length && searchCountry.length !== 195 ? (
        <ul>
          {searchCountry.map((country) => (
            <li key={uuidv4()}>
              <Link to="/countries/country" onClick={showCountryFiltered}>
                <h1>{country.name.common}</h1>
              </Link>
              <img src={country.flags.png} alt="country-flag" />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={uuidv4()}>
              <Link to="/countries/country" onClick={showCountry}>
                <h1>{country.name.common}</h1>
              </Link>
              <img src={country.flags.png} alt="country-flag" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
