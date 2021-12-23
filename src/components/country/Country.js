/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Country = ({
  searchCountry, country, onSetCountry, onSetSearchEmpty,
}) => {
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
        <div>
          <img src={country.flags.png} alt="country-flag" />
          <h1>{country.name.common}</h1>
          {country.borders && (
            <div>
              <h2>Borderering Countries:</h2>
              <ul>
                {country.borders.map((bord) => (
                  <li key={uuidv4()}>{bord}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2>
              Country Size Area:
              {(country.area / 1000).toFixed(2)}
              thousand sq km;
            </h2>
            <h2>
              Population Size:
              {country.population}
              people;
            </h2>
          </div>
          <div>
            <h2>
              Capital:
              {country.capital[0]}
            </h2>
            <p>
              Capital coordonates: lat:
              {country.capitalInfo.latlng[0]}
              lng:
              {country.capitalInfo.latlng[1]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Country;
