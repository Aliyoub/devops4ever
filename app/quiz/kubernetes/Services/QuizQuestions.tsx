import React from "react";
import {
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  Box,
  Radio,
  styled,
} from "@mui/material";
import { Roboto } from "next/font/google";
import "../../../../app/styles.css";

const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

const CustomRadio = styled(Radio)({
  "& .MuiSvgIcon-root": { fontSize: 15 },
  color: "rgb(224, 247, 250)",
//   color: "#3B8FEF",
  fontWeight:"bolder",
  "&.Mui-checked": { color: "#FCA4F0" },
});

type QuizQuestionsProps = {
  question: string;
  options: { [key: string]: string };
  currentSelection: number | null;
  onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onPrevious: () => void;
  disablePrevious: boolean;
  isLastQuestion: boolean;
};

const QuizQuestions: React.FC<QuizQuestionsProps> = ({
  question,
  options,
  currentSelection,
  onOptionChange,
  onNext,
  onPrevious,
  disablePrevious,
  isLastQuestion,
}) => {
  return (
      <Box
        sx={{
          width: "100%",
          maxHeight: "70vh",
          overflowY: "auto",
          marginBottom: "16px",
        }}
      >
        <Typography  className={(roboto.className, "questionText")} variant="h6">
          {question}
        </Typography>
        <FormControl style={{ width: "100%" }} component="fieldset">
          <RadioGroup value={currentSelection} onChange={onOptionChange}>
            {Object.entries(options).map(([key, value], index) => (
              <FormControlLabel
                key={index}
                value={index}
                control={<CustomRadio />}
                label={
                  <Typography sx={{ color: "rgb(224, 247, 250)", fontSize: "1rem" }}>
                    {value}
                  </Typography>
                }
                style={{
                  backgroundColor: "#3B8FEF",
                  borderBottom: "0.5px solid #FCA4F0",
                  padding: 0,
                  margin: 0,
                  width: "100%",
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button
          variant="outlined"
          onClick={onPrevious}
          disabled={disablePrevious}
          className="previewButton"
          sx={{marginLeft: 7}}
        >
          Précédent
        </Button>
        <Button
          className={!isLastQuestion ? "nextButton" : ""}
          variant="contained"
          onClick={onNext}
          sx={{marginRight: 7}}
        >
          {isLastQuestion ? "Voir le score" : "Suivant"}
        </Button>
      </Box>
      </Box>
  );
};

export default QuizQuestions;
