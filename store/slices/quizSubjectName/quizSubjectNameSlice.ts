
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface quizSubjectNameState {
  value: string; // A adapter
}

const initialState: quizSubjectNameState = {
  value: "", // A adapter
};

export const quizSubjectNameSlice = createSlice({
  name: 'quizSubjectName',
  initialState,
  reducers: {
    // Pour définir le sujet du quiz => ex: KUBERNETES
    setQuizSubjectName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuizSubjectName } = quizSubjectNameSlice.actions;

export default quizSubjectNameSlice.reducer;

