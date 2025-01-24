"use client";

import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Button,
  styled,
  FormControl,
} from "@mui/material";
import { Roboto } from "next/font/google";
// import "../../../app/styles.css";
import "../public/quizQuestionsInterface.css";

import { motion } from "framer-motion";
import Confetti from "react-confetti";
import CorrectAnswerAnimation from "@/components/correctAnswerAnimation/CorrectAnswerAnimation";

const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

const CustomRadio = styled(Radio)({
  "& .MuiSvgIcon-root": { fontSize: 13, color: "#fca4f0" },
  "&.Mui-checked": { color: "#FCA4F0" },
});

interface QuizQuestionsProps {
  question: {
    question_id: number;
    question: string;
    options: string[];
    answer: string;
  };
  userAnswer: string | undefined;
  onAnswerSelection: (answer: string) => void;
  onNext: () => void;
  onQuit: () => void;
  disableNext: boolean;
  disablePreview: boolean;
  disableValidate: boolean;
  hideValidate: boolean;
  formControlLabelDisabled: boolean;
  onValidate: () => void;
  isGoodAnswer: boolean;
  isLastQuestion: boolean;
}

const Quizquestions: React.FC<QuizQuestionsProps> = ({
  question,
  userAnswer,
  onAnswerSelection,
  onNext,
  onQuit,
  disableNext,
  disablePreview,
  disableValidate,
  hideValidate,
  formControlLabelDisabled,
  onValidate,
  isGoodAnswer,
  isLastQuestion,

  // options,
  // currentSelection,
  // onOptionChange,
  // onPrevious,
  // disablePrevious,
}) => {
  return (
    <Box className="radioButtonsInterfaceMainBloc">
      {/* Affichage de la question */}
      <div className={(roboto.className, "questionText")}>
        {"Question "}
        {question.question_id}
        {": "}
        {question.question}
      </div>

      {/* Options sous forme de boutons radio */}
      <FormControl className="formControl" component="fieldset">
        <RadioGroup
          value={userAnswer || ""}
          onChange={(event) => onAnswerSelection(event.target.value)}
        >
          {question.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<CustomRadio />}
              label={
                <div className={(roboto.className, "quizContainer")}>
                  {option}
                </div>
              }
              className="formControlLabel"
              disabled={formControlLabelDisabled}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {/* Boutons de navigation */}
      <Box className="navigation-bloc">
        <Button
          variant="outlined"
          onClick={onQuit}
          className={(roboto.className, "quitButton")}
        >
          Quitter
        </Button>
        {/* Si la propriété hidden du bouton valider est à true => donc le bouton valider est caché */}
        {hideValidate &&
          (isGoodAnswer === true ? (
            <>
              <CorrectAnswerAnimation />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                style={{
                  marginTop: "7px",
                  color: "green",
                  fontSize: "0.9rem",
                }}
              >
                ✅ Bravo !
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: "7px", color: "red", fontSize: "0.9rem" }}
            >
              ❌ Mauvaise réponse !
            </motion.div>
          ))}
        {/* Si la propriété hidden du bouton valider est à false => donc le bouton valider est visible */}
        {!hideValidate && (
          <Button
            variant="outlined"
            onClick={onValidate}
            disabled={disableValidate}
            hidden={hideValidate}
            className={(roboto.className, "validateButton")}
          >
            valider
          </Button>
        )}

        <Button
          variant="contained"
          onClick={onNext}
          disabled={disableNext}
          className={(roboto.className, "nextButton")}
        >
          {isLastQuestion ? "Voir le score" : "Suivant"}
        </Button>
      </Box>
    </Box>
  );
};

export default Quizquestions;
