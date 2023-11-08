import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import { useUser } from '@/context/UserContext';
import axios from 'axios';

export const GetUser = async () => {
  const { user } = useUser();
  try {
    return await axios
      .get(`${BASE_URL}user/${user.id}`, {
        headers: {
          'x-api-key': API_KEY,
          Authorization: ADMIN_TOKEN,
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const UpdateUser = async () => {
  const { user } = useUser();
  try {
    return await axios
      .put(`${BASE_URL}/${user.id}/update`, {
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

/* export const deleteUser = async (id) => {
    const { user } = useUser();
    try {
        return await axios
            .delete(`${BASE_URL}user/${id}`, {
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
 */
