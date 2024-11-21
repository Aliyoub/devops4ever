
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface quizStartIndexState {
  value: number // A adapter
}

const initialState: quizStartIndexState = {
  value: 0 // A adapter
};

export const quizStartIndexSlice = createSlice({
  name: 'quizStartIndex',
  initialState,
  reducers: {
    setQuizStartIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuizStartIndex } = quizStartIndexSlice.actions;

export default quizStartIndexSlice.reducer;

