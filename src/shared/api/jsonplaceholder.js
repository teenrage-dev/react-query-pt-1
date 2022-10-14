import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAll = async () => {
  return instance.get('/users');
};
