import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUpdate: false,
  edit: {
    visible: false,
    data: {}
  }
};

export const incomes = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    onShowModal: (
      _,
      action: PayloadAction<{ visible: boolean; data: {}; isUpdate: boolean }>
    ) => {
      return {
        isUpdate: action.payload.isUpdate,
        edit: {
          visible: action.payload.visible,
          data: action.payload.data
        }
      };
    }
  }
});

export const { onShowModal } = incomes.actions;
export default incomes.reducer;
