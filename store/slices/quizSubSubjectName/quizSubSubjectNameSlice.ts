
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface quizSubSubjectNameState {
  value: string; // A adapter
}

const initialState: quizSubSubjectNameState = {
  value: "", // A adapter
};

export const quizSubSubjectNameSlice = createSlice({
  name: 'quizSubSubjectName',
  initialState,
  reducers: {
    // Pour définir le thème sur lequel vont porter le quiz => ex : DEPANNAGE (toubleshooting)
    setQuizSubSubjectName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuizSubSubjectName } = quizSubSubjectNameSlice.actions;

export default quizSubSubjectNameSlice.reducer;

