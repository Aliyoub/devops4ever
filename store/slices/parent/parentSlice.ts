
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface parentState {
  value: string; // A adapter
}

const initialState: parentState = {
  value: "", // A adapter
};

export const parentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    setParent: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setParent } = parentSlice.actions;

export default parentSlice.reducer;
