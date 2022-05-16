import React from "react";
import style from "./CountryCard.module.css";

const CountryCard = ({ country }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <span role="img" aria-label="flag">
          {country.emoji}
        </span>
        <h4>
          {country.name}, {country.capital}
        </h4>
        <p>Currency: ${country.currency}</p>
        <p>Phone: +{country.phone}</p>
        <p>Native: {country.native}</p>
      </div>
    </>
  );
};

export default CountryCard;
