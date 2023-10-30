import { useUser } from '@/context/UserContext';
import API from './webapi.service';
import { BASE_URL } from './urls';

const { user } = useUser();

export const getUser = async () => {
  try {
    return await API.get(`${BASE_URL}/user/${user}`).then(
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

export const updateUser = async () => {
  const { user } = useUser();

  try {
    return await API.put(`${BASE_URL}/user/update`).then(
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
