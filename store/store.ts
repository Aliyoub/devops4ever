// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import counterReducer from "./slices/counterSlice";
import ttsVolumeReducer from "./slices/tts/ttsVolumeSlice";
import ttsPitchReducer from "./slices/tts/ttsPitchSlice";
import ttsRateReducer from "./slices/tts/ttsRateSlice";
import contentReducer from "./slices/content/contentSlice";
import selectedItemReducer from "./slices/selectedItem/selectedItemSlice";
import controlStateReducer from "./slices/controlState/controlStateSlice";
import ggListVoicesReducer from "./slices/ggListVoices/ggListVoicesSlice";
import ggTtsSelectedVoiceReducer from "./slices/ggTtsSelectedVoice/ggTtsSelectedVoiceSlice";
import quizSizeReducer from './slices/quizSize/quizSizeSlice';
import quizStartIndexReducer from './slices/quizStartIndex/quizStartIndexSlice';
import quizSubjectNameReducer from './slices/quizSubjectName/quizSubjectNameSlice';
import quizSubSubjectNameReducer from './slices/quizSubSubjectName/quizSubSubjectNameSlice';
import parentReducer from './slices/parent/parentSlice';
import childReducer from './slices/child/childSlice';
import grandChildReducer from './slices/grandChild/grandChildSlice';
import quizOrReadingExpandedReducer from './slices/quizOrReadingExpanded/quizOrReadingExpandedSlice';
import isGoodAnswerReducer from './slices/isGoodAnswer/isGoodAnswerSlice';
// import slices => Ne pas supprimer !!!

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ttsVolume: ttsVolumeReducer,
    ttsPitch: ttsPitchReducer,
    ttsRate: ttsRateReducer,
    content: contentReducer,
    selectedItem: selectedItemReducer,
    controlState: controlStateReducer,
    ggListVoices: ggListVoicesReducer,
    ggTtsSelectedVoice: ggTtsSelectedVoiceReducer,
    	quizSize: quizSizeReducer,
	quizStartIndex: quizStartIndexReducer,
	quizSubjectName: quizSubjectNameReducer,
	quizSubSubjectName: quizSubSubjectNameReducer,
	parent: parentReducer,
	child: childReducer,
	grandChild: grandChildReducer,
	quizOrReadingExpanded: quizOrReadingExpandedReducer,
	isGoodAnswer: isGoodAnswerReducer,
// configureStore => Ne pas supprimer !!!
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch;

// Custom hooks to use instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;