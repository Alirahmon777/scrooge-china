import { createSlice } from '@reduxjs/toolkit';
import { authSlice } from '@/redux/features/services/auth/authService';
// import type { RootState } from '@/redux/store';
import { IUser } from '@/types/interfaces';

type AuthState = {
  user: IUser | null;
  token: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authSlice.endpoints.loginAdmin.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
  },
});

export default slice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
