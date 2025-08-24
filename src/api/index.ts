import axios from 'axios';
import { GetKeyChain } from '../utils/keychain';

const API_CLIENT = axios.create({
  baseURL: 'http://192.168.1.5:3000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

API_CLIENT.interceptors.request.use(
  async (config) => {
    try {
      const credentials = await GetKeyChain();
      console.log(credentials, 'this is in keychain');
      if (credentials) {
        config.headers.Authorization = `Bearer ${credentials}`;
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default API_CLIENT;
