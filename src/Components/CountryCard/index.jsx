import React from "react";
import style from "./CountryCard.module.css";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <>
      {country.languages && country.languages.length > 1 ? (
        country.languages.map(({ name }) => (
          <h2 key={name} style={{ display: "inline-block" }}>
            {name} /
          </h2>
        ))
      ) : (
        <h2>{country.languages[0].name}</h2>
      )}
      <div className={style.cardContainer}>
        <span role="img" aria-label="flag">
          {country.emoji}
        </span>
        <h4>
          {country.name}, {country.capital}
        </h4>
        <p>Currency: ${country.currency}</p>
        <p>Phone: +{country.phone}</p>
        <p>Continent: {country.continent.name}</p>
      </div>
    </>
  );
};

export default CountryCard;
