import axios from "axios";

var url = "https://covid19.mathdro.id/api";

export const Countries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const countryInfo = async (country) => {
  try {
    if (country === "global" || country === "") {
      const {
        data: { confirmed, recovered, deaths, lastUpdate }
      } = await axios.get(url);
      return { confirmed, recovered, deaths, lastUpdate };
    } else {
      const {
        data: { confirmed, recovered, deaths, lastUpdate }
      } = await axios.get(`${url}/countries/${country}`);
      return { confirmed, recovered, deaths, lastUpdate };
    }
  } catch (error) {
    console.log(error);
  }
};
