"use client";
import React, { useEffect } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Button,
  styled,
} from "@mui/material";
import { Roboto } from "next/font/google";
import "../../../app/styles.css";

const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

const CustomRadio = styled(Radio)({
  "& .MuiSvgIcon-root": { fontSize: 15, color: "#fca4f0" },
  "&.Mui-checked": { color: "#FCA4F0" },
});

interface QuizQuestionsProps {
  question: {
    id: number;
    question: string;
    options: string[];
    answer: string;
  };
  userAnswer: string | undefined;
  onAnswerSelection: (answer: string) => void;
  onNext: () => void;
  onPreview: () => void;
  //   disableNext: boolean;
  disablePreview: boolean;
  isLastQuestion: boolean;
}

const QuizQuestions: React.FC<QuizQuestionsProps> = ({
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
    <Box
      sx={{ textAlign: "left", marginBottom: 2 }}
      className="scrollable-content"
    >
      {/* Affichage de la question */}
      <Typography className={(roboto.className, "questionText")} variant="h6">
        {"Question "}
        {question.id}
        {": "}
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

export default QuizQuestions;
