import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type AuthInterface } from './types/index';
const intialState: AuthInterface = {
  isLoggedIn: false,
  userProfile: null,
  loading: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: intialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<AuthInterface>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userProfile = action.payload.userProfile;
      state.loading = action.payload.loading;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userProfile = null;
    },
  },
});

export const { loginSuccess, logout, setLoader } = AuthSlice.actions;
export default AuthSlice.reducer;
