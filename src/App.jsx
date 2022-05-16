import React from "react";
import Button from "./Components/Button";
import CountryCard from "./Components/CountryCard";
import SearchBar from "./Components/SearchBar";
// import { gql, useQuery } from "@apollo/client";

// const countriesList = gql`
//   {
//     countries {
//       name
//       code
//       phone
//     }
//   }
// `;

const App = () => {
  // const { data, error, loading } = useQuery(countriesList);

  // if (loading || error) {
  //   return <p>{error ? error.message : "Loading..."}</p>;
  // }

  return (
    <>
      <h1>Country search</h1>
      <SearchBar />
      <br />
      <div>
        <h2>Group by: </h2>
        <Button text="Continent" />
        <Button text="Language" />
      </div>
      <br />
      <CountryCard
        country={{
          emoji: "🇦🇹",
          name: "Austria",
          capital: "Vienna",
          currency: "EUR",
          phone: "43",
          continent: {
            name: "Europe",
          },
          languages: [
            {
              name: "German",
            },
          ],
        }}
      />
      <CountryCard
        country={{
          emoji: "🇧🇦",
          name: "Bosnia and Herzegovina",
          capital: "Sarajevo",
          currency: "BAM",
          phone: "387",
          continent: {
            name: "Europe",
          },
          languages: [
            {
              name: "Bosnian",
            },
            {
              name: "Croatian",
            },
            {
              name: "Serbian",
            },
          ],
        }}
      />
    </>
  );
};

export default App;
