import React from 'react';
import { NavLink } from 'react-router-dom';
//6. Import NavLink from react router dom
//7. Make the country name clickable and redirect to /:aplha3Code
function CountryList({ countries }) {
  return (
    <ul>
      {countries.map((country, index) => {
        return (
          <li key={index}>
            <NavLink to={`/${country.alpha3Code}`}>{country.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
export default CountryList;