
import { createSlice } from '@reduxjs/toolkit';

export interface isGoodAnswerState {
  value: number; // A adapter
}

const initialState: isGoodAnswerState = {
  value: 1.0, // A adapter
};

export const isGoodAnswerSlice = createSlice({
  name: 'isGoodAnswer',
  initialState,
  reducers: {
    isGoodAnswer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isGoodAnswer } = isGoodAnswerSlice.actions;

export default isGoodAnswerSlice.reducer;

