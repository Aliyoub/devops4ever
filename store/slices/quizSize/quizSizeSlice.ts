
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface quizSizeState {
  value: number; // A adapter
}

const initialState: quizSizeState = {
  value: 10, // A adapter
};

export const quizSizeSlice = createSlice({
  name: 'quizSize',
  initialState,
  reducers: {
    setQuizSize: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuizSize } = quizSizeSlice.actions;

export default quizSizeSlice.reducer;

// const inputSlice = createSlice({
//   name: 'input',
//   initialState,
//   reducers: {
//     setInputValue: (state, action: PayloadAction<string>) => {
//       state.value = action.payload;
//     },
//   },
// });