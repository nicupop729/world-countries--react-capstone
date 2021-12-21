/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

const Country = ({ country }) => {
  console.log(country);

  return (
    <div>
      <img src={country.flags.png} alt="country-flag" />
      <h1>{country.name.common}</h1>
      {country.borders && (
        <div>
          <h2>Borderering Countries:</h2>
          <ul>
            {country.borders.map((bord) => (
              <li key={uuidv4()}>{bord}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2>
          Country Size Area:
          {' '}
          {(country.area / 1000).toFixed(2)}
          {' '}
          thousand
          {' '}
          sq km;
        </h2>
        <h2>
          Population Size:
          {' '}
          {country.population}
          {' '}
          people;
        </h2>
      </div>
      <div>
        <h2>
          Capital:
          {' '}
          {country.capital[0]}
        </h2>
        <p>
          Capital coordonates:
          {' '}
          lat:
          {country.capitalInfo.latlng[0]}
          {' '}
          lng:
          {country.capitalInfo.latlng[1]}
          ;
        </p>
      </div>
    </div>
  );
};

export default Country;
