import React from "react";

const Button = ({
  text,
  countriesByContinent,
  countriesByLanguage,
  setCountriesByContinent,
  setCountriesByLanguage,
}) => {
  return (
    <button
      className="btn"
      onClick={() =>
        setCountriesByContinent
          ? setCountriesByContinent(!countriesByContinent)
          : setCountriesByLanguage(!countriesByLanguage)
      }
    >
      {text}
    </button>
  );
};

export default Button;
