import { Routes, Route } from 'react-router-dom';
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';

const App = () => (
  <div className="App">
    <header>
      <h1>World Countries</h1>
      <input type="text" placeholder="Search country" />
    </header>
    <Routes>
      <Route exact path="/" element={<Continents />} />
      <Route exact path="/countries" element={<Countries />} />
      <Route exact path="/country" element={<Country />} />
    </Routes>
  </div>
);

export default App;
