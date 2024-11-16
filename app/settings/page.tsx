'use client'

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setQuizSize } from "../../store/slices/quizSize/quizSizeSlice";


const page = () => {
  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const dispatch = useDispatch();
//   const inputValue = useSelector((state: RootState) => state.input.value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuizSize(event.target.value));
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