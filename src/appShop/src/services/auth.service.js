import API from './webapi.service';

export async function register(param) {
  try {
    const { data } = await API.post(`/shop/create`, param);
    // console.log(JSON.stringify(data, null, 2));
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
