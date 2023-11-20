// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import axios from 'axios';

export const getUser = async (userId) => {
  try {
    return await axios
      .get(`${BASE_URL}user/${userId}`, {
        headers: {
          'x-api-key': API_KEY,
          Authorization: ADMIN_TOKEN,
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(
      `ERROR IN GetUser => [${error?.response?.status}]\n ${JSON.stringify(
        error?.response?.data,
        null,
        2,
      )}`,
    );
    throw error;
  }
};

export const updateUser = async (userId) => {
  try {
    return await axios
      .put(`${BASE_URL}/${userId}/update`, {
        headers: {
          'x-api-key': API_KEY,
          Authorization: ADMIN_TOKEN,
        },
      })
      .then(
        (response) => response.data,
        (error) => {
          console.log(error);
          return null;
        },
      );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCustomer = async () => {
  try {
    return await axios
      .put(`${BASE_URL}/customer/update`, {
        headers: {
          'x-api-key': API_KEY,
          Authorization: ADMIN_TOKEN,
        },
      })
      .then(
        (response) => response.data,
        (error) => {
          console.log(error);
          return null;
        },
      );
  } catch (error) {
    console.log(error);
    return null;
  }
};
