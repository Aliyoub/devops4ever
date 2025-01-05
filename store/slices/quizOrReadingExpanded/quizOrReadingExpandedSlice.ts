
import { createSlice } from '@reduxjs/toolkit';

export interface quizOrReadingExpandedState {
  value: boolean;
}

const initialState: quizOrReadingExpandedState = {
  value: false,
};

export const quizOrReadingExpandedSlice = createSlice({
  name: 'quizOrReadingExpanded',
  initialState,
  reducers: {
    setQuizOrReadingExpanded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQuizOrReadingExpanded } = quizOrReadingExpandedSlice.actions;

export default quizOrReadingExpandedSlice.reducer;

