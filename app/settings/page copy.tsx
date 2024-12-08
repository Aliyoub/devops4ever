"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setQuizSize } from "../../store/slices/quizSize/quizSizeSlice";
import { setQuizStartIndex } from "../../store/slices/quizStartIndex/quizStartIndexSlice";

const Page = () => {
  const dispatch = useDispatch();

  const quizSize = useSelector((state: RootState) => state.quizSize.value);

  const quizSizeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue: number = Number(event.target.value);

    dispatch(setQuizSize(numericValue));
  };

// ================================================================================

  const quizStartIndex = useSelector(
    (state: RootState) => state.quizStartIndex.value);

  const quizStartIndexInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue: number = Number(event.target.value);

    dispatch(setQuizStartIndex(numericValue));
  };

  return (
    <>
      <div style={{marginTop:30}}>
        <input
          type="text"
          value={quizStartIndex}
          onChange={quizStartIndexInputChange}
          placeholder="ex: 5, pour commencer à la question 5..."
        />
      </div>
      <div style={{marginTop:30}}>
        <input
          type="text"
          value={quizSize}
          onChange={quizSizeInputChange}
          placeholder="ex: 10, pour traiter 10 questions..."
        />
      </div>
    </>
  );
};

export default Page;
