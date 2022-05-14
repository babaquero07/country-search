import React from "react";
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
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
    </>
  );
};

export default App;
