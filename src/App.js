import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';

const App = () => {
  const [countries, setCountries] = useState('');
  const [country, setCountry] = useState('');
  const [searchCountry, setSearchCountry] = useState('');

  const handlerSetCountries = (countriesName) => {
    setCountries(countriesName);
  };

  const handlerSetCountry = (countryName) => {
    setCountry(countryName);
  };

  const handlerSearchCountry = (countrySearch) => {
    setSearchCountry(countrySearch);
  };

  return (
    <div className="App">
      <Header onSearchCountry={handlerSearchCountry} />
      <Routes>
        <Route exact path="/" element={<Continents searchCountry={searchCountry} onSetCountries={handlerSetCountries} onSetCountry={handlerSetCountry} />} />
        <Route exact path="/countries" element={<Countries countries={countries} onSetCountry={handlerSetCountry} />} />
        <Route exact path="/countries/country" element={<Country country={country} />} />
      </Routes>
    </div>
  );
};

export default App;
