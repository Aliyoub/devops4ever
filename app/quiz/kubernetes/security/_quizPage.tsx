"use client";

import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import QuizQuestions from "../../quizPage/QuizQuestions";
import QuizScore from "../../quizPage/QuizScore";
// import { questions } from "./questionServices";

type QuizPageProps = {
  quizQuestions: any[];
};

export default function QuizPage({ quizQuestions }: QuizPageProps) {
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
      theSliceQuestions[currentQuestion].options[
        selectedOptions[currentQuestion]
      ] === theSliceQuestions[currentQuestion].answer;
      // Object.keys(theSliceQuestions[currentQuestion].options)[
      //   selectedOptions[currentQuestion]
      // ] === theSliceQuestions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
      // Retirer de la liste des réponses incorrectes si la réponse devient correcte
      // setIncorrectAnswersList((prev) =>
      //   prev.filter((item: any) => item.question_id !== currentQuestion)
      // );
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
    // if (currentQuestion < theSliceQuestions.length - 1) {
    // setCurrentQuestion((prev) => prev + 1);
    setCurrentQuestion(currentQuestion + 1);
    // }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      const previousQuestionIndex = currentQuestion - 1;
      const previousAnswer = selectedOptions[previousQuestionIndex];
      console.log("previousAnswer:", previousAnswer);
      if (previousAnswer === null) {
        setUnansweredQuestionsList((prev) =>
          prev.filter((item: any) => {
            item.question_id !== previousQuestionIndex;
            console.log("item.question_id:", item.question_id);
          })
        );
      } else {
        const wasCorrect =
          previousAnswer === theSliceQuestions[previousQuestionIndex].answer;
        // theSliceQuestions[previousQuestionIndex].correctAnswerIndex;

        if (wasCorrect) {
          setScore((prevScore) => prevScore - 1); // Diminue le score si la réponse précédente était correcte
        } else {
          setIncorrectAnswersList((prev) =>
            prev.filter(
              (item: any) => item.question_id !== previousQuestionIndex
            )
          ); // Retire des réponses incorrectes si nécessaire
        }
      }
      // setCurrentQuestion(currentQuestion - 1);
    }
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
        />
      )}
    </div>
  );
}
