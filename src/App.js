import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [continentMap, setContinentMap] = useState('');

  const handlerSetCountries = (countriesName) => {
    setCountries(countriesName);
  };

  const handlerSetCountry = (countryName) => {
    setCountry(countryName);
  };

  const handlerSearchCountry = (countrySearch) => {
    setSearchCountry(countrySearch);
  };

  const handlerSetSearchEmpty = (value) => {
    setSearchCountry(value);
  };

  const handlerSetContinentMap = (value) => {
    setContinentMap(value);
  };

  return (
    <div className="App">
      <Header onSearchCountry={handlerSearchCountry} />
      <Routes>
        <Route exact path="/" element={<Continents searchCountry={searchCountry} onSetCountries={handlerSetCountries} onSetCountry={handlerSetCountry} onSetSearchEmpty={handlerSetSearchEmpty} onSetContinentMap={handlerSetContinentMap} />} />
        <Route exact path="/countries" element={<Countries searchCountry={searchCountry} countries={countries} onSetCountry={handlerSetCountry} onSetSearchEmpty={handlerSetSearchEmpty} continentMap={continentMap} />} />
        <Route exact path="/countries/country" element={<Country searchCountry={searchCountry} country={country} onSetCountry={handlerSetCountry} onSetSearchEmpty={handlerSetSearchEmpty} />} />
      </Routes>
    </div>
  );
};

export default App;
