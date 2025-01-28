import axios from 'axios';

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const getExchangeRate = async (baseCurrency, targetCurrency) => {
  const response = await axios.get(`${API_URL}${baseCurrency}`);
  return response.data.rates[targetCurrency];
};

