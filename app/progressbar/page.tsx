"use client";

import React, { useState } from "react";

export default function QuizWithProgressBar() {
  // Nombre total de questions (exemple : 10)
  const totalQuestions = 10;
  // Index de la question courante (de 0 à totalQuestions - 1)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcul du pourcentage (arrondi au besoin)
  const progressPercentage = Math.floor((currentIndex / totalQuestions) * 100);

  const handleNextQuestion = () => {
    // Incrémente l'index si on n'est pas déjà à la dernière question
    setCurrentIndex((prevIndex) =>
      prevIndex < totalQuestions - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <main style={{ paddingLeft: "7rem" }}>
      {/* <h1>Quiz en cours</h1> */}

      {/* Affichage du nombre de questions */}
      <p>
        Question {currentIndex + 1} / {totalQuestions}
      </p>

      {/* Barre de progression */}
      <div
        style={{
          width: "300px",
          backgroundColor: "#FFFFFF",
          // backgroundColor: "#FCA4F0",
          height: "7px",
          marginBottom: "0.1rem",
          borderRadius: "4px",
          overflow: "hidden",
          border: "1px solid #E0F7FA",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "green",
            // height: "100%",
          }}
        />
      </div>

      {/* Bouton Suivant */}
      {/* <button
        onClick={handleNextQuestion}
        style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
      >
        Suivant
      </button> */}
    </main>
  );
}
