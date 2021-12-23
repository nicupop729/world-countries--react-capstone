import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import DisplayCountries from '../countries/DisplayCountries';
import './country.css';

const Country = ({
  searchCountry, country, onSetCountry, onSetSearchEmpty,
}) => {
  const showCountryFiltered = (e) => {
    const setCountry = searchCountry.filter(
      (country) => country.name.common === e.target.textContent,
    );
    const finalCountry = setCountry[0];
    onSetCountry(finalCountry);
    onSetSearchEmpty([]);
  };

  return (
    <div>
      {searchCountry.length && searchCountry.length !== 195 ? (
        <DisplayCountries name={searchCountry} showCountry={showCountryFiltered} />
      ) : (
        <div className="Country">
          <img className="Country__flag" src={country.flags.png} alt="country-flag" />
          <div className="Country__assets">
            <h1 className="Country__name">{country.name.common}</h1>
            <img src={country.coatOfArms.png} alt="coat of arms" />
          </div>
          <div className="Country__sizes">
            <h2>
              Country Size Area:
              {' '}
              {(country.area / 1000).toFixed(2)}
              {' '}
              thousand sq km;
            </h2>
            <h2>
              Population Size:
              {' '}
              {country.population}
              {' '}
              people;
            </h2>
            <h2>
              Capital:
              {' '}
              {country.capital[0]}
            </h2>
            {country.borders && (
            <div>
              <h2>Borderering Countries:</h2>
              <ul className="Country__borders_list">
                {country.borders.map((bord) => (
                  <li key={uuidv4()}>{bord}</li>
                ))}
              </ul>
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Country.propTypes = {
  searchCountry: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  country: PropTypes.instanceOf(Object).isRequired,
  onSetCountry: PropTypes.func.isRequired,
  onSetSearchEmpty: PropTypes.func.isRequired,
};

Country.defaultProps = {
  searchCountry: [],
};

export default Country;
