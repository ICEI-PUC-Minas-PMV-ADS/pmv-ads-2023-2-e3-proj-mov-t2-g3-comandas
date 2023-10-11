import axios from 'axios';
import { Alert } from 'react-native';
import { getUser, navigate, deleteUser } from '../utils';

const BASE_URL = 'https://comandas-api.vercel.app/docs/';

const api = axios.create({

/* const headers = {
    'x-api-key': process.env.API_KEY,
    Authorization: process.env.ADMIN_TOKEN,
}; */

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  Accept: 'application/json',
});

);

export default api;
