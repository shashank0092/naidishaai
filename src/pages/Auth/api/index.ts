import API_CLIENT from '../../../api';
import { CreateUserPayload } from '../types/index';
export const CREATE_USER_API = (data: CreateUserPayload) => {
  return API_CLIENT.post('/auth/register', data);
};
