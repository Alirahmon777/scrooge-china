import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

const initialState: AppState = {
  currency: localStorage.getItem('currency') || 'rub',
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      localStorage.setItem('currency', action.payload);
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = appSlice.actions;
export default appSlice.reducer;

export const selectCurrency = (state: RootState) => state.app.currency;

type AppState = {
  currency: string;
};
