import { useUser } from '@/context/UserContext';
import API from './webapi.service';

export async function register(param) {
  try {
    const { data } = await API.post(`/customer/create`, param);
    return data;
  } catch (error) {
    console.log(
      `ERROR IN register => [${error?.response?.status}]\n ${JSON.stringify(
        error?.response?.data,
        null,
        2,
      )}`,
    );
    throw error;
  }
}

export async function login(param) {
  try {
    const { data } = await API.post(`/user/login`, param);
    return data;
  } catch (error) {
    console.log(
      `ERROR IN login => [${error?.response?.status}]\n ${JSON.stringify(
        error?.response?.data,
        null,
        2,
      )}`,
    );
    throw error;
  }
}

export async function updateUser(param) {
  const { user } = useUser;
  try {
    const { data } = await API.put(`/user/update`, param);
    return data;
  } catch (error) {
    console.log(
      `ERROR IN updateUserAuthService => [${
        error?.response?.status
      }]\n ${JSON.stringify(error?.response?.data, null, 2)}`,
    );
    throw error;
  }
}

export async function registerUserAddress(param) {
  try {
    const { data } = await API.post(`/address/create`, param);
    return data;
  } catch (error) {
    console.log(
      `ERROR IN registerUserAddress => [${
        error?.response?.status
      }]\n ${JSON.stringify(error?.response?.data, null, 2)}`,
    );
    throw error;
  }
}
