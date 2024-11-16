'use client'

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setQuizSize } from "../../store/slices/quizSize/quizSizeSlice";


const page = () => {
  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue: number = Number(event.target.value);

    dispatch(setQuizSize(numericValue));
  };

  return (
    <div>
      <input
        type="text"
        value={quizSize}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Current value in store: {quizSize}</p>
    </div>
  );
}

export default page