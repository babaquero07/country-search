import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";
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
  const [countries, setCountries] = useState({});

  useEffect(() => {
    setCountries(data);
  }, [data]);

  if (loading) return <Spinner />;

  return (
    <div className={style.homeContainer}>
      <div className={style.homeContainer__content}>
        <h1>Country search</h1>
        <SearchBar />
        <div>
          <h2>Group by: </h2>
          <Button text="Continent" />
          <Button text="Language" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
