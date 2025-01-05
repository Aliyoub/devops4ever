"use client";
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Score from "./score";
import QuizQuestion from "./quizQuestion";

// Définition des types pour les questions et réponses
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Déclaration de la liste des questions (theSliceQuestions)
const theSliceQuestions: Question[] = [
  {
    id: 1,
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Lyon", "Marseille", "Nice"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Quelle est la capitale de l'Allemagne ?",
    options: ["Berlin", "Hambourg", "Munich", "Francfort"],
    correctAnswer: "Berlin",
  },
  // Ajoutez d'autres questions ici
];

// Composant principal du quiz
const QuizComponent: React.FC = () => {
  // État pour suivre l'index de la question courante
  // useState(0) => dès le départ, on est positionné sur la première question
  const [currentIndex, setCurrentIndex] = useState(0);

  // État pour suivre les réponses de l'utilisateur
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  // Fonction pour gérer les sélections de réponse
  const handleAnswerSelection = (answer: string) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: answer });
  };

  // Fonction pour gérer le bouton "Suivant"
  const handleNext = () => {
    if (currentIndex < theSliceQuestions.length) {
      // if (currentIndex < theSliceQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fonction pour gérer le bouton "Preview"
  const handlePreview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Rendu du composant
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      {currentIndex < theSliceQuestions.length ? (
        /* Interface questionnaire */
        <QuizQuestion
          question={theSliceQuestions[currentIndex]}
          userAnswer={userAnswers[currentIndex]}
          onAnswerSelection={handleAnswerSelection}
          onNext={handleNext}
          onPreview={handlePreview}
          // disableNext={currentIndex === theSliceQuestions.length - 1}
          disablePreview={currentIndex === 0}
          isLastQuestion={currentIndex === theSliceQuestions.length - 1}
        />
      ) : (
        /* Affichage des statistiques */
        <Score userAnswers={userAnswers} questions={theSliceQuestions} />
      )}
    </Box>
  );
};

// Exportation du composant
export default QuizComponent;
