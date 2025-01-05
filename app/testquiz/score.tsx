"use client";
import React from "react";

interface ScoreProps {
  userAnswers: Record<number, string>;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Score: React.FC<ScoreProps> = ({ userAnswers, questions }) => {
  // Calcul des réponses correctes
  const correctAnswers = questions.filter(
    (question, index) => userAnswers[index] === question.correctAnswer
  );

  // Calcul des réponses incorrectes
  const incorrectAnswers = questions.filter(
    (question, index) =>
      userAnswers[index] && userAnswers[index] !== question.correctAnswer
  );

  // Calcul des questions non répondues
  const unansweredQuestions = questions.filter(
    (question, index) => userAnswers[index] === undefined
  );
  console.log(
    "first!!!",
    correctAnswers,
    incorrectAnswers,
    unansweredQuestions
  );
  return (
    <div>
      <h3>Statistiques</h3>
      <p>Réponses correctes : {correctAnswers.length}</p>
      <p>
        Réponses incorrectes : {incorrectAnswers.length}
        {incorrectAnswers.map((c, id) => (
          <>
            <div key={id}>Question: {c.question}</div>
            <div key={id}>Réponse proposée: {userAnswers[id]}</div>
            <div key={id}>Réponse correcte: {c.correctAnswer}</div>
          </>
        ))}
      </p>

      <p>Questions non répondues : {unansweredQuestions.length}</p>
    </div>
  );
};

export default Score;
