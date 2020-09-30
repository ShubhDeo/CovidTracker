import React, { useState, useEffect } from "react";
import { InputBar } from "../src/Component/Input/Input";
import { Cards } from "../src/Component/Card/Cards";
import { countryInfo } from "../src/Component/api";
import { BarChart } from "../src/Component/Bar";

export const App = () => {
  const [globalStats, setGlobalStats] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchGlobalStats = async () => {
      setGlobalStats(await countryInfo(country));
    };

    fetchGlobalStats();
  }, [country]);

  function handleClick(country) {
    setCountry(country);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px"
      }}
    >
      <img src="https://i.ibb.co/7QpKsCX/image.png" alt="header" />
      <InputBar handleClick={handleClick} />
      <Cards globalStats={globalStats} />
      <BarChart globalStats={globalStats} country={country} />
    </div>
  );
};
