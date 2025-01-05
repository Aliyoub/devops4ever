"use client";
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

// Question de démonstration
const quizQuestion = {
  question: "Quelle est la version de l'API dans ce fichier YAML ?",
  options: ["a) v1", "b) apps/v1", "c) v2", "d) core/v1"],
  answer: "a) v1",
};

const QuizWithAnimations = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Fonction de gestion des réponses
  const handleAnswerSelection = (option: string) => {
    setSelectedAnswer(option);
    if (option === quizQuestion.answer) {
      setIsCorrect(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000); // Arrêt des feux d'artifice après 4s
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "10px",
        border: "2px solid #ddd",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Effet de Confetti lorsqu'une bonne réponse est donnée */}
      {showConfetti && <Confetti />}

      {/* Question */}
      <Typography variant="h4" gutterBottom>
        {quizQuestion.question}
      </Typography>

      {/* Liste des options avec animation */}
      {quizQuestion.options.map((option, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={() => handleAnswerSelection(option)}
            variant="outlined"
            sx={{
              margin: "10px",
              padding: "10px",
              width: "100%",
            }}
          >
            {option}
          </Button>
        </motion.div>
      ))}

      {/* Animation de secousse si la réponse est incorrecte */}
      {isCorrect === false && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "20px", color: "red", fontSize: "1.5rem" }}
        >
          ❌ Mauvaise réponse ! Réessayez.
        </motion.div>
      )}

      {/* Message de succès avec animation */}
      {isCorrect === true && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "20px", color: "green", fontSize: "1.5rem" }}
        >
          ✅ Bravo ! Bonne réponse !
        </motion.div>
      )}
    </Box>
  );
};

export default QuizWithAnimations;
