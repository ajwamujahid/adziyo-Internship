
import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const res = await axios.get(
    `${BASE_URL}/all?fields=name,capital,flags,region,population`
  );
  return res.data;
};

export const getCountryByName = async (name: string) => {
  const res = await axios.get(`${BASE_URL}/name/${name}`);
  return res.data[0];
};
