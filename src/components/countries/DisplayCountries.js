import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DisplayCountries = ({ name, showCountry }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Countries__arrow">
        <ArrowBackIcon className="Countries__arrow_icon" onClick={() => navigate('/')} />
      </div>
      <ul className="Countries__list">
        {name.map((country) => (
          <li key={uuidv4()} className="Countries__list_items">
            <Link to="/countries/country" onClick={showCountry}>
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
DisplayCountries.propTypes = {
  name: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  showCountry: PropTypes.func.isRequired,
};

export default DisplayCountries;
