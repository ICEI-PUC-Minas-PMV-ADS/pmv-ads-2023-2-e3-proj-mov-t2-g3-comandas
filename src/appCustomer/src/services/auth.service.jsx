import API from './webapi.service';
import BASE_URL from './urls';

export const register = async (param) => {
  try {
    // url do endpoint
    return await API.post(`${BASE_URL}/register`, param).then(
      (response) => response.data,
      (error) => {
        console.error(error);
        return null;
      },
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
