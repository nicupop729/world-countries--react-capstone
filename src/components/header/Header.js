import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import './header.css';

const Header = ({ onSearchCountry }) => {
  const [search, setSearch] = useState('');

  const continents = useSelector((state) => state);

  const countries = Object.values(continents);
  const finalC = [];
  countries.map((continent) => finalC.push(...continent));

  useEffect(() => {
    const s = search.toLowerCase();
    const searchCountry = finalC.filter((country) => country.name.common.toLowerCase().includes(s));
    const sortedFiteredCountries = _.sortBy(searchCountry, ['name.common'], ['asc']);
    onSearchCountry(sortedFiteredCountries);
  }, [search]);

  const countrySearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="Header">
      <h1 className="Header__title">World Countries</h1>
      <form>
        <input
          id="search-bar"
          type="text"
          placeholder="Search country"
          onChange={countrySearchHandler}
          value={search}
          className="input-searh"
        />
      </form>
    </header>
  );
};

Header.propTypes = {
  onSearchCountry: PropTypes.func.isRequired,
};

export default Header;
