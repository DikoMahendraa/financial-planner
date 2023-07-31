import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  values: {
    name: 'cocomahendra',
    isStatus: false
  }
};

export const incomes = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    setReducerIncomes: (_, action: PayloadAction<string>) => {
      return {
        values: {
          name: action.payload,
          isStatus: true
        }
      };
    }
  }
});

export const { setReducerIncomes } = incomes.actions;
export default incomes.reducer;
