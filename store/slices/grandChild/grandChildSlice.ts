
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface grandChildState {
  value: string; // A adapter
}

const initialState: grandChildState = {
  value: "", // A adapter
};

export const grandChildSlice = createSlice({
  name: 'grandChild',
  initialState,
  reducers: {
    setGrandChild: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setGrandChild } = grandChildSlice.actions;

export default grandChildSlice.reducer;

