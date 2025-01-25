"use client";
import React, { useRef, useEffect } from "react";

const QuizComponent = () => {
  const correctSoundRef: any = useRef(null);
  const incorrectSoundRef: any = useRef(null);

  const handleAnswer = (isCorrect: any) => {
    if (isCorrect) {
      correctSoundRef.current.play();
    } else {
      incorrectSoundRef.current.play();
    }
  };
  // useEffect(() => {
  //   handleAnswer();
  // });
  return (
    <div>
      {/* Vos questions de quiz */}
      <button onClick={() => handleAnswer(true)}>Réponse correcte</button>
      <button onClick={() => handleAnswer(false)}>Réponse incorrecte</button>

      {/* Balises audio */}
      <audio ref={correctSoundRef} src="/sounds/correct-answer.mp3" />
      <audio ref={incorrectSoundRef} src="/sounds/incorrect-answer.mp3" />
    </div>
  );
};

export default QuizComponent;
