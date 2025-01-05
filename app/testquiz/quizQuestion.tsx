"use client";
import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  };
  userAnswer: string | undefined;
  onAnswerSelection: (answer: string) => void;
  onNext: () => void;
  onPreview: () => void;
  //   disableNext: boolean;
  disablePreview: boolean;
  isLastQuestion: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  userAnswer,
  onAnswerSelection,
  onNext,
  onPreview,
  //   disableNext,
  disablePreview,
  isLastQuestion,
}) => {
  return (
    <Box sx={{ textAlign: "left", marginBottom: 2 }}>
      {/* Affichage de la question */}
      <Typography variant="h6" gutterBottom>
        {question.question}
      </Typography>

      {/* Options sous forme de boutons radio */}
      <RadioGroup
        value={userAnswer || ""}
        onChange={(event) => onAnswerSelection(event.target.value)}
      >
        {question.options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>

      {/* Boutons de navigation */}
      <Box
        sx={{ marginTop: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Button
          variant="outlined"
          onClick={onPreview}
          disabled={disablePreview}
        >
          Preview
        </Button>
        <Button
          //   className={!isLastQuestion ? "nextButton" : ""}
          variant="contained"
          onClick={onNext}
          //   disabled={disableNext}
        >
          {isLastQuestion ? "Voir le score" : "Suivant"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizQuestion;
