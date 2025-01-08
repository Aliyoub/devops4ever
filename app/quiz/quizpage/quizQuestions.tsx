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
import "../../../app/styles.css";
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
  onPreview: () => void;
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
  onPreview,
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
  // const [isValidateButtonHidden, setIsValidateButtonHidden] = useState(false);
  // const handleValidate = () => {
  //   // Pour faire disparaître le bouton validate,
  //   // et ainsi afficher le message disant c'est une réponse correcte ou non
  //   setIsValidateButtonHidden(true);
  // };
  return (
    <Box
      // sx={{ width: "100%" }}
      // className="scrollable-content"
      sx={{
        width: "100vw",
        height: "40vh",
        // width: "100%",
        // maxHeight: "70vh",
        overflowY: "auto",
        // marginBottom: "106px",
      }}
    >
      {/* Affichage de la question */}
      <div className={(roboto.className, "questionText")}>
        {"Question "}
        {question.question_id}
        {": "}
        {question.question}
      </div>

      {/* Options sous forme de boutons radio */}
      <FormControl style={{ width: "100%" }} component="fieldset">
        <RadioGroup
          value={userAnswer || ""}
          onChange={(event) => onAnswerSelection(event.target.value)}
        >
          {question.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<CustomRadio />}
              // control={<Radio />}
              label={
                <div
                  className={(roboto.className, "quizContainer")}
                  // sx={{ color: "rgb(224, 247, 250)", fontSize: "1rem" }}
                >
                  {option}
                </div>
              }
              // label={option}
              style={{
                backgroundColor: "#3B8FEF",
                borderBottom: "0.5px solid #FCA4F0",
                padding: 0,
                margin: 0,
                width: "100%",
                height: "1.7rem",
              }}
              disabled={formControlLabelDisabled}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {/* Boutons de navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={onPreview}
          // disabled={false}
          sx={{
            margin: 0.3,
            height: "1.8rem",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1rem",
          }}
          className={roboto.className}
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
            sx={{
              margin: 0.3,
              height: "1.8rem",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.1rem",
            }}
          >
            valider
          </Button>
        )}

        <Button
          variant="contained"
          onClick={onNext}
          disabled={disableNext}
          sx={{
            margin: 0.3,
            height: "1.8rem",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1rem",
          }}
        >
          {isLastQuestion ? "Voir le score" : "Suivant"}
        </Button>
      </Box>
    </Box>
  );
};

export default Quizquestions;
