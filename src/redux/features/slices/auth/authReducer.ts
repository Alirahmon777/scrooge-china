import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAdmin, IUser } from '@/types/interfaces';
import { RootState } from '@/redux/store';
import { TStoredAdmin } from '@/admin/types/types';
import { TStoredUser } from '@/types/types';

const admin: TStoredAdmin = JSON.parse(localStorage.getItem('admin') as string);
const storedUser: TStoredUser = JSON.parse(localStorage.getItem('user') as string);

const initialState: AuthState = {
  admin: null,
  admin_token: admin?.admin_token || null,
  user: null,
  token: storedUser?.token || null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserAuthState>) => {
      state.user = action.payload.user;
    },
    setUserToken: (state, action: PayloadAction<UserTokenState>) => {
      state.token = action.payload.token;
    },
    setAdmin: (state, action: PayloadAction<AdminAuthState>) => {
      state.admin = action.payload.admin;
      state.role = action.payload.role;
    },
    setAdminToken: (state, action: PayloadAction<AdminTokenState>) => {
      state.admin_token = action.payload.admin_token;
    },
  },
});

export const { setUser, setAdmin, setAdminToken, setUserToken } = authSlice.actions;
export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectUserToken = (state: RootState) => state.auth.token;
export const selectRole = (state: RootState) => state.auth.role;
export const selectCurrentAdmin = (state: RootState) => state.auth.admin;
export const selectCurrentAdminToken = (state: RootState) => state.auth.admin_token;

type UserAuthState = {
  user: IUser | null;
};

type UserTokenState = {
  token: string | null;
};

type AdminTokenState = {
  admin_token: string | null;
};

type AdminAuthState = {
  admin: IAdmin | null;
  role: string | null;
};

type AuthState = UserAuthState & AdminAuthState & UserTokenState & AdminTokenState;
