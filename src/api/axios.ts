import axios from 'axios';

export const initializeAxios = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_RESAS_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
  });
};
