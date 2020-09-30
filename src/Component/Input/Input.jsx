import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "../../Component/Input/Input.module.css";
import { Countries } from "../api";

export const InputBar = ({ handleClick }) => {
  const [totalCountries, setTotalCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setTotalCountries(await Countries());
    };
    fetchCountries();
  }, []);

  // function handleClick(country) {
  //   console.log(country);
  // }

  return (
    <FormControl className={styles.container}>
      <NativeSelect
        className={styles.input}
        onChange={(e) => {
          handleClick(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {totalCountries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};
