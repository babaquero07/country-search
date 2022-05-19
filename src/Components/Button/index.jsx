import React, { useState } from "react";

const Button = ({
  text,
  countriesByContinent,
  countriesByLanguage,
  setCountriesByContinent,
  setCountriesByLanguage,
}) => {
  const [style, setStyle] = useState("btn");

  return (
    <button
      className={style}
      onClick={() => {
        style === "btn" ? setStyle("btnActive") : setStyle("btn");

        setCountriesByContinent
          ? setCountriesByContinent(!countriesByContinent)
          : setCountriesByLanguage(!countriesByLanguage);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
