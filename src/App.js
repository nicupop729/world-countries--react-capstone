import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';

const App = () => {
  const [countries, setCountries] = useState('');
  const [country, setCountry] = useState('');

  const handlerSetCountries = (countriesName) => {
    setCountries(countriesName);
  };

  const handlerSetCountry = (countryName) => {
    setCountry(countryName);
  };

  return (
    <div className="App">
      <header>
        <h1>World Countries</h1>
        <input type="text" placeholder="Search country" />
      </header>
      <Routes>
        <Route exact path="/" element={<Continents onSetCountries={handlerSetCountries} />} />
        <Route exact path="/countries" element={<Countries continents={countries} onSetCountry={handlerSetCountry} />} />
        <Route exact path="/country" element={<Country countries={country} />} />
      </Routes>
    </div>
  );
};

export default App;
