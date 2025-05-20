
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  const { data } = await axios.get(`${BASE_URL}/all`);
  return data;
};

export const fetchCountryByName = async (name) => {
  const { data } = await axios.get(`${BASE_URL}/name/${name}`);
  return data[0];
};
