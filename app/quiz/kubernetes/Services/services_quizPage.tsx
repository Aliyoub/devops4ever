"use client";

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import QuizQuestions from "./QuizQuestions";
import QuizScore from "./QuizScore";
import { questions } from "./questionServices";
import { useRouter } from "next/router";

export default function Services_quizPage() {
  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const quizStartIndex = useSelector(
    (state: RootState) => state.quizStartIndex.value
  );

  const myQuestions = useMemo(
    () => questions.slice(quizStartIndex, quizStartIndex + quizSize),
    [quizStartIndex, quizSize]
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(myQuestions.length).fill(null)
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
      Object.keys(myQuestions[currentQuestion].options)[
        selectedOptions[currentQuestion]
      ] === myQuestions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
    } else if (selectedOptions[currentQuestion] !== null) {
      setIncorrectAnswersList((prev) => [
        ...prev,
        myQuestions[currentQuestion],
      ]);
    } else {
      setUnansweredQuestionsList((prev) => [
        ...prev,
        myQuestions[currentQuestion],
      ]);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  
  const handleGotoQuiz = () => {
  const router = useRouter();
    router.push("/quiz", undefined, { shallow: true });
  };

  return (
    <div>
      {currentQuestion < myQuestions.length ? (
        <QuizQuestions
          question={myQuestions[currentQuestion].question}
          options={myQuestions[currentQuestion].options}
          currentSelection={selectedOptions[currentQuestion]}
          onOptionChange={handleOptionChange}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          disablePrevious={currentQuestion === 0}
          isLastQuestion={currentQuestion === myQuestions.length - 1}
        />
      ) : (
        <QuizScore
          score={score}
          totalQuestions={myQuestions.length}
          incorrectAnswers={incorrectAnswersList}
          unansweredQuestions={unansweredQuestionsList}
          onGotoQuiz={handleGotoQuiz}
        />
      )}
    </div>
  );
}
