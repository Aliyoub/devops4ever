// components/Qiuz.js;
import { useState } from "react";
import styles from "./Quiz.module.css";

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Berlin", "Londres", "Madrid", "Paris"],
    answer: "Paris",
  },
  // Ajoutez d'autres questions selon vos besoins
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setFeedback("");
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className={styles.quizContainer}>
      <h2>{questions[currentQuestion].question}</h2>
      <div className={styles.optionsContainer}>
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`${styles.optionButton} ${
              selectedOption === option ? styles.selectedOption : ""
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={!!feedback}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && (
        <div
          className={`${styles.feedback} ${
            feedback === "correct" ? styles.correct : styles.incorrect
          }`}
        >
          {feedback === "correct" ? "Bonne réponse !" : "Mauvaise réponse."}
        </div>
      )}
      {feedback && currentQuestion < questions.length - 1 && (
        <button onClick={handleNextQuestion} className={styles.nextButton}>
          Question suivante
        </button>
      )}
    </div>
  );
}
