import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../../../store/hooks';
import { CreateUserPayload } from '../types/index';
import { CREATE_USER_API } from '../api';
import { loginSuccess, setLoader } from '../../../store/feature/Auth/AuthSlice';
import { AxiosError } from 'axios';

export const useCreateUser = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: async (data: CreateUserPayload) => {
      dispatch(setLoader(true));
      const resposne = await CREATE_USER_API(data);
      console.log(resposne, 'this is resposne');
      return resposne.data;
    },
    onSuccess: (data) => {
      dispatch(
        loginSuccess({
          isLoggedIn: true,
          userProfile: data.data,
          loading: false,
        }),
      );
    },
    onError: (error: unknown) => {
      dispatch(setLoader(false));
      const err = error as AxiosError<any>;
      console.log(err, 'this is err');
      console.log(err.response?.data?.error);
    },
  });
};
