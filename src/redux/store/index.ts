import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicers/counterSlice';
import { authSlice } from '../features/users/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
