"use client";

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import QuizQuestions from "./QuizQuestions";
import QuizScore from "./QuizScore";
import { questions } from "./questionServices";
import { useRouter } from "next/router";


type QuizPageProps = {
  quizQuestions : any[];
};

export default function QuizPage({quizQuestions}:QuizPageProps) {
  const router = useRouter();

  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const quizStartIndex = useSelector(
    (state: RootState) => state.quizStartIndex.value
  );

   const theSliceQuestions = useMemo(
    () => quizQuestions.slice(quizStartIndex, quizStartIndex + quizSize),
    [quizStartIndex, quizSize]
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(theSliceQuestions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [incorrectAnswersList, setIncorrectAnswersList] = useState<object[]>(
    []
  );
  const [unansweredQuestionsList, setUnansweredQuestionsList] = useState<
    object[]
  >([]);

  const handleOptionChange = (event: any) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = parseInt(event.target.value, 10);
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    const isCorrect =
      Object.keys(theSliceQuestions[currentQuestion].options)[
        selectedOptions[currentQuestion]
      ] === theSliceQuestions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
    } else if (selectedOptions[currentQuestion] !== null) {
      setIncorrectAnswersList((prev) => [
        ...prev,
        theSliceQuestions[currentQuestion],
      ]);
    } else {
      setUnansweredQuestionsList((prev) => [
        ...prev,
        theSliceQuestions[currentQuestion],
      ]);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  
  const _onGotoQuiz = () => {
    router.push("/quiz", undefined, { shallow: true });
  };

  return (
    <div>
      {currentQuestion < theSliceQuestions.length ? (
        <QuizQuestions
          question={theSliceQuestions[currentQuestion].question}
          options={theSliceQuestions[currentQuestion].options}
          currentSelection={selectedOptions[currentQuestion]}
          onOptionChange={handleOptionChange}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          disablePrevious={currentQuestion === 0}
          isLastQuestion={currentQuestion === theSliceQuestions.length - 1}
        />
      ) : (
        <QuizScore
          score={score}
          totalQuestions={theSliceQuestions.length}
          incorrectAnswers={incorrectAnswersList}
          unansweredQuestions={unansweredQuestionsList}
          onGotoQuiz={_onGotoQuiz}
        />
      )}
    </div>
  );
}
