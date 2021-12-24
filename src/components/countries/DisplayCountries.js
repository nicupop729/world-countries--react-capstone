import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DisplayCountries = ({ name, showCountry }) => (
  <ul className="Countries__list">
    {name.map((country) => (
      <li key={uuidv4()} className="Countries__list_items">
        <Link to="/countries/country" onClick={showCountry}>
          <p>{country.name.common}</p>
        </Link>
      </li>
    ))}
  </ul>
);

DisplayCountries.propTypes = {
  name: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  showCountry: PropTypes.func.isRequired,
};

export default DisplayCountries;
