
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface childState {
  value: string; // A adapter
}

const initialState: childState = {
  value: "", // A adapter
};

export const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    setChild: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setChild } = childSlice.actions;

export default childSlice.reducer;

