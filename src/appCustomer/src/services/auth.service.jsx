import API from './webapi.service';
import BASE_URL from './urls';

export const register = async (param) => {
  try {
    // url do endpoint - verificar com Alvaro se esse é o caminho certo para novo usuário
    return await API.post(`${BASE_URL}/customer/create`, param).then(
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

export const login = async (param) => {
  try {
    // url do endpoint - confirmar com Alvaro qual o caminho para login
    return await API.post(`${BASE_URL}/user/login`, param).then(
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
