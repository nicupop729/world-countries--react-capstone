import _ from 'lodash';
import PropTypes from 'prop-types';
import europeMap from '../../assets/map_of_Europe.svg.png';
import asiaMap from '../../assets/map_Asia.svg.png';
import africaMap from '../../assets/map-Africa.svg.png';
import oceaniaMap from '../../assets/map_Oceania.svg.png';
import northAmericaMap from '../../assets/map-North_America-Subdivisions.svg.png';
import centralAmericaMap from '../../assets/map_America_Central-color.svg.png';
import southAmericaMap from '../../assets/map_of_South_America.svg.png';
import './countries.css';
import DisplayCountries from './DisplayCountries';

const Countries = ({
  searchCountry,
  countries,
  onSetCountry,
  onSetSearchEmpty,
  continentMap,
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
    onSetCountry(finalCountry);
    onSetSearchEmpty([]);
  };

  const sortedCountries = _.sortBy(countries, ['name.common'], ['asc']);

  return (
    <div>
      {searchCountry.length && searchCountry.length !== 195 ? (
        <DisplayCountries name={searchCountry} showCountry={showCountryFiltered} />
      ) : (
        <div className="Countries">
          {continentMap === 'europe' ? <img className="continent_map" src={europeMap} alt="europe map" /> : null}
          {continentMap === 'asia' ? <img className="continent_map" src={asiaMap} alt="asia map" /> : null}
          {continentMap === 'africa' ? <img className="continent_map" src={africaMap} alt="africa map" /> : null}
          {continentMap === 'oceania' ? <img className="continent_map" src={oceaniaMap} alt="oceania map" /> : null}
          {continentMap === 'northAmerica' ? <img className="continent_map" src={northAmericaMap} alt="north america map" /> : null}
          {continentMap === 'centralAmerica' ? <img className="continent_map" src={centralAmericaMap} alt="central america map" /> : null}
          {continentMap === 'southAmerica' ? <img className="continent_map" src={southAmericaMap} alt="south america map" /> : null}
          <DisplayCountries name={sortedCountries} showCountry={showCountry} />
        </div>
      )}
    </div>
  );
};

Countries.propTypes = {
  searchCountry: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  countries: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  onSetCountry: PropTypes.func.isRequired,
  onSetSearchEmpty: PropTypes.func.isRequired,
  continentMap: PropTypes.string.isRequired,
};

Countries.defaultProps = {
  searchCountry: [],
  countries: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default Countries;
