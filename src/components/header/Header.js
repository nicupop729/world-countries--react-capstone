/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './header.css';

const Header = ({ onSearchCountry }) => {
  const [search, setSearch] = useState('');

  const continents = useSelector((state) => state);

  const countries = Object.values(continents);
  const finalCountries = [];
  countries.map((continent) => finalCountries.push(...continent));

  useEffect(() => {
    // eslint-disable-next-line max-len
    const searchCountry = finalCountries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));
    onSearchCountry(searchCountry);
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

export default Header;
