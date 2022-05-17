import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";
import CountryCard from "../../Components/CountryCard";
import style from "./HomePage.module.css";
import { gql, useQuery } from "@apollo/client";

const countriesList = gql`
  {
    countries {
      emoji
      name
      capital
      currency
      phone
      native
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

const HomePage = () => {
  const { data, loading } = useQuery(countriesList);
  const [countries, setCountries] = useState();
  const [countriesByContinent, setCountriesByContinent] = useState(false);
  const [countriesByLanguage, setCountriesByLanguage] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (data) {
      const { countries } = data;
      setCountries(countries);
    }
  }, [data]);

  const updateInput = (input) => {
    const filtered = data.countries.filter((country) => {
      return (
        country.name.toLowerCase().slice(0, input.length) ===
        input.toLowerCase()
      );
    });
    setInput(input);
    setCountries(filtered);
  };

  if (loading) return <Spinner />;

  return (
    <div className={style.homeContainer}>
      <div className={style.homeContainer__content}>
        <h1>Country search</h1>
        <SearchBar input={input} onChange={updateInput} />
        <div>
          <h2>Group by: </h2>
          <Button
            text="Continent"
            countriesByContinent={countriesByContinent}
            setCountriesByContinent={setCountriesByContinent}
          />
          <Button
            text="Language"
            countriesByLanguage={countriesByLanguage}
            setCountriesByLanguage={setCountriesByLanguage}
          />
        </div>
        <div className={style.HomeContainer__countryList}>
          {countries &&
            input &&
            countriesByContinent === false &&
            countriesByLanguage === false &&
            countries.map((country) => (
              <CountryCard country={country} key={country.name} />
            ))}

          {countriesByContinent &&
            countriesByLanguage === false &&
            countries.map((country) => (
              <div key={country.name}>
                <h2>{country.continent.name}</h2>
                <CountryCard country={country} />
              </div>
            ))}

          {countriesByLanguage &&
            countriesByContinent === false &&
            countries.map((country) => (
              <div key={country.name}>
                {country.languages.length > 1 ? (
                  country.languages.map((language, idx) => (
                    <div key={idx}>
                      <h3>{language.name}</h3>
                    </div>
                  ))
                ) : country.languages[0] === undefined ? (
                  <h3>N/A</h3>
                ) : (
                  <h3>{country.languages[0].name}</h3>
                )}
                <CountryCard country={country} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
