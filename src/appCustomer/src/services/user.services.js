import API from './webapi.service';
import { BASE_URL } from './urls';

export const getUser = async (userId) => {
  try {
    return await API.get(`${BASE_URL}/user/${userId}`).then(
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

export const updateUser = async (userId) => {
  try {
    return await API.put(`${BASE_URL}/user/update/${userId}`).then(
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
