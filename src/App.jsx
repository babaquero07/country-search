import React from "react";
import HomePage from "./Pages/Home";

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

  return <HomePage />;
};

export default App;
