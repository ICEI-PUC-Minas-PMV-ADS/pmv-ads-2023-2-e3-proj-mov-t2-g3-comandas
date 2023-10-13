/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { BASE_URL } from './urls';

const onRequest = async (config) => {
  config.headers['x-api-key'] = process.env.API_KEY;

  const token = await SecureStore.getItemAsync('TOKEN_KEY');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

async function refreshToken(userId) {
  const headers = {
    Authorization: process.env.ADMIN_TOKEN,
    'x-api-key': process.env.API_KEY,
  };

  try {
    const { data } = await axios.put(
      `${BASE_URL}/user/updatetoken`,
      { id: parseInt(userId, 10) },
      { headers },
    );

    return data;
  } catch (err) {
    console.error(
      `ERRO REFRESH TOKEN => [${err?.response?.status}]\n ${JSON.stringify(
        err?.response?.data,
        null,
        2,
      )}`,
    );
  }
}

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onRequest, async (error) => {
    // salvar requisição feita antes do erro
    const originalRequest = error.config;

    // Se ocorrer erro de token expired
    if (
      error.response.status === 403 &&
      error.response.data === 'Invalid token' &&
      !originalRequest._retry
    ) {
      // falar que é para repetir a request antiga
      originalRequest._retry = true;
      const userId = await SecureStore.getItemAsync('USER_ID');

      // refreshToken
      const response = await refreshToken(userId);

      await SecureStore.setItemAsync('TOKEN_KEY', response);

      // colocando novo access token nas headers padrões
      API.defaults.headers.common.Authorization = `Bearer ${response}`;

      // refazendo request antes do erro de token expired
      return API(originalRequest);
    }

    return Promise.reject(error);
  });

  return axiosInstance;
};

const API = axios.create({ baseURL: BASE_URL });
setupInterceptorsTo(API);
export default API;
