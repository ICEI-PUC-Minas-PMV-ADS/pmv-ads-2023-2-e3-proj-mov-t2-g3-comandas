import axios from 'axios';
import { Alert } from 'react-native';
import { getUser, navigate, deleteUser } from '../utils/utils';
import { config } from 'chai';

const BASE_URL = 'https://comandas-api.vercel.app/docs/';

/* const headers = {
    'x-api-key': process.env.API_KEY,
    Authorization: process.env.ADMIN_TOKEN,
}; */

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.request._hasError === true && error.request._response.includes('connect'))
    {
        Alert.alert(
            'Aviso',
            'Sem conexão à internet',
            [ {text: 'OK'}],
            { cancelable: false },
        )
    }
    if (error.response.status === 401) {
        const requestConfig = error.config

        deleteUser().then(() => {
            navigate('AuthLoading', {})
        })
        return axios(requestConfig)
    }
    return Promise.reject(error)
    ,
  },
)

api.interceptors.request.use(
    async config => {
        try {
            const user = await getUser();
            user = JSON.parse(user);
            if (user && user.token)
                config.headers.Authorization = `Bearer ${user.token}`;
            return await Promise.resolve(config);
        } catch (error) {
            console.error(error);
            return await Promise.resolve(config);
        }
    },
    error => {
        return Promise.reject(error)
    },
)

export default api;
