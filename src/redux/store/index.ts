import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../features/basics/apiService';
import { userService } from '../features/basics/userService';
import authReducer from '../features/slices/auth/authReducer';
import { adminBasicService } from '../features/basics/adminService';
import { publicService } from '../features/services/public/publicService';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    [adminBasicService.reducerPath]: adminBasicService.reducer,
    [userService.reducerPath]: userService.reducer,
    [publicService.reducerPath]: publicService.reducer,
    auth: authReducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiService.middleware,
      userService.middleware,
      adminBasicService.middleware,
      publicService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;