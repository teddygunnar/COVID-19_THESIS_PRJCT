import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import covid19response from "../../images/covid19response.png";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange, country }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
    console.log(fetchedCountries);
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <img src={covid19response} alt="covid19icon" className={styles.image} />
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
