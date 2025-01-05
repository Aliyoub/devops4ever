"use client";

import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../../../store/store";
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Container,
  styled,
} from "@mui/material";

// import { questions } from "../questionRoles";

import { Roboto } from "next/font/google";
import "../../../styles.css";
import { RootState } from "@/store/store";

const roboto = Roboto({
  subsets: ["latin"], // Charge le sous-ensemble latin uniquement
  weight: ["400", "700"], // Charge les poids 400 et 700
  style: ["normal", "italic"], // Charge les styles normal et italique
  display: "swap", // Paramètre pour l'optimisation du chargement
});

const CustomRadio = styled(Radio)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: 15, // Taille personnalisée
  },

  color: "#3B8FEF",
  "&.Mui-checked": { color: "#FCA4F0" },
}));

// Arrière-plan avec dégradé léger et uniforme
const GradientBackground = styled(Box)({
  //   minHeight: "100vh",
  //   background: "linear-gradient(135deg, #3B8FEF, #FCA4F0)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const QuizContainer = styled(Box)({
  //   maxWidth: '480px',
  width: "100%",
  // padding: "10px",
  // borderRadius: "10px",
  // backgroundColor: "#ffffff",
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  lineHeight: 1.2,
  letterSpacing: 0.3,
  wordSpacing: "0.005em",
  textAlignLast: "left",
  textAlign: "justify",
  fontWeight: "510",
});

const QuestionText = styled(Typography)({
  fontSize: "0.85rem",
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 7,
  lineHeight: 1.2,
  letterSpacing: 0.3,
  wordSpacing: "0.005em",
  textAlignLast: "left",
  textAlign: "justify",
  fontWeight: "510",
});
const GivenAnswers = styled(Typography)({
  fontSize: "0.85rem",
  color: "#FFFFFF",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 7,
  lineHeight: 1.2,
  letterSpacing: 0.3,
  wordSpacing: "0.005em",
  textAlignLast: "left",
  textAlign: "justify",
  fontWeight: "510",
});
const CorrectAnswers = styled(Typography)({
  fontSize: "0.85rem",
  // fontWeight: 500,
  color: "#FFFFFF",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 7,
  lineHeight: 1.4,
  letterSpacing: 0.3,
  wordSpacing: "0.005em",
  textAlignLast: "left",
  // wordSpacing: 1,
  textAlign: "justify",
  fontWeight: "510",
});

// const CorrectAnswersTitle = styled(Typography)({
//   fontSize: "1rem",
//   // fontWeight: 500,
//   color: "#FCA4F0",
//   border: "0.5px solid #FCA4F0",
//   backgroundColor: "#264BC0",
//   padding: 3,
//   lineHeight: 1.2,
//   letterSpacing: 0.4,
//   wordSpacing: "0.005em",
//   // textAlignLast: "left",
//   // textAlign: "justify",
//   fontWeight: "510",
//   // width: "100%",
//   // alignSelf: "center",
//   marginBottom: 10
// });

// const IncorrectAnswersTitle = styled(Typography)({
//   fontSize: "1rem",
//   color: "#FCA4F0",
//   border: "0.5px solid #FCA4F0",
//   backgroundColor: "#264BC0",
//   padding: 3,
//   lineHeight: 1.2,
//   letterSpacing: 0.4,
//   wordSpacing: "0.005em",
//   fontWeight: "510",
// });

const UnansweredQuestionsTitle = styled(Typography)({
  fontSize: "1.2rem",
  // fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#264BC0",
  padding: 7,
  lineHeight: 1.2,
  letterSpacing: 0.4,
  wordSpacing: "0.005em",
  textAlignLast: "left",
  textAlign: "justify",
  fontWeight: "510",
});

export default function Services_quizPage() {
  // useEffect(() => {
  //   document.documentElement.style.height =
  //     "calc(100vh - env(safe-area-inset-top))";
  //   document.documentElement.style.overflow = "hidden";
  // },[]);

  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const quizStartIndex = useSelector(
    (state: RootState) => state.quizStartIndex.value
  );
  // Pour choisir le nombre de questions traiter
  const sizeOfarrayDesired = quizSize;
  // Pour choisir le début des questions, et donc avoir la possibilité de traiter les questions par tranche
  // const quizStartIndex = quizSize;
  // useMemo pour ne pas avoir à recharger le tableau des questions à chaque fois
  const myQuestions = useMemo(
    () => questions.slice(quizStartIndex, quizStartIndex + sizeOfarrayDesired),
    []
  );
  // const myQuestions = useMemo(() => questions.slice(26, sizeOfarrayDesired+26), []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<any[]>(myQuestions);
  // const [selectedOptions, setSelectedOptions] = useState(
  //   Array(myQuestions.length).fill(null)
  // );
  const [score, setScore] = useState(0);

  const [incorrectAnswersList, setIncorrectAnswersList] = useState<object[]>(
    []
  );
  const [unansweredQuestionsList, setUnansweredQuestionsList] = useState<
    object[]
  >([]);
  // const [incorrectAnswersList, setIncorrectAnswersList] = useState([]);
  // const [unansweredQuestionsList, setUnansweredQuestionsList] = useState([]);

  const handleOptionChange = (event: any) => {
    const updatedOptions = [...selectedOptions];
    // currentQuestion est l'index de la question en cours
    //parseInt(event.target.value, 10) est l'index de la dernière réponse
    updatedOptions[currentQuestion] = parseInt(event.target.value, 10);
    // selectedOptions est le tableau contenant les index de toutes les réponses
    setSelectedOptions(updatedOptions);
  };
  // if the answer is correct
  const handleNextQuestion = () => {
    if (
      // selectedOptions[currentQuestion] === myQuestions[currentQuestion].answer
      Object.keys(myQuestions[currentQuestion]["options"])[
        selectedOptions[currentQuestion]
      ] === myQuestions[currentQuestion].answer
      // selectedOptions[currentQuestion] === myQuestions[currentQuestion].answer
    ) {
      setScore(score + 1);
    } else if (
      Object.keys(myQuestions[currentQuestion]["options"])[
        selectedOptions[currentQuestion]
      ] !== myQuestions[currentQuestion].answer &&
      Object.keys(myQuestions[currentQuestion]["options"])[
        selectedOptions[currentQuestion]
      ] !== null
    ) {
      // const incorrectAnswers = [...incorrectAnswersList];
      setIncorrectAnswersList((prev: any) => [
        ...prev,
        myQuestions[currentQuestion],
      ]);
      // setIncorrectAnswersList(incorrectAnswers);
    } else {
      setUnansweredQuestionsList((prev: any) => [
        ...prev,
        myQuestions[currentQuestion],
      ]);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <GradientBackground>
      <QuizContainer>
        {currentQuestion < myQuestions.length ? (
          <>
            <QuestionText className={roboto.className} variant="h6">
              {myQuestions[currentQuestion].question}
            </QuestionText>
            <FormControl style={{ width: "100%" }} component="fieldset">
              <RadioGroup
                value={selectedOptions[currentQuestion]}
                onChange={handleOptionChange}
              >
                {Object.values(myQuestions[currentQuestion]["options"]).map(
                  (option: any, index) => (
                    // {myQuestions[currentQuestion].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={index}
                      // control={
                      //   <Radio
                      //     sx={{
                      //       color: "#3B8FEF",
                      //       "&.Mui-checked": { color: "#FCA4F0" },
                      //       fontSize: 10,
                      //     }}
                      //   />
                      // }

                      control={<CustomRadio />}
                      label={
                        <Typography sx={{ color: "#FFFFFF", fontSize: "1rem" }}>
                          {option}
                        </Typography>
                      }
                      style={{
                        backgroundColor: "#264BC0",
                        borderBottom: "0.5px solid #FCA4F0",
                        padding: 0,
                        margin: 0,
                        width: "100%",
                      }}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button
                variant="outlined"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                sx={{
                  color: "#3B8FEF",
                  borderColor: "#3B8FEF",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#FCA4F0",
                    borderColor: "#3B8FEF",
                  },
                }}
              >
                Précédent
              </Button>
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                // disabled={selectedOptions[currentQuestion] === null}
                sx={{
                  backgroundColor: "#3B8FEF",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#3B8FEF" },
                }}
              >
                {currentQuestion < myQuestions.length - 1
                  ? "Suivant"
                  : "Voir le score"}
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              marginTop: 0,
            }}
          >
            <Typography
            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   flexDirection: "column",
            //   width: "100%"
            // }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  mt: 2,
                  color: "#3B8FEF",
                  // textAlign: "center",
                  fontWeight: "bold",
                  // width: "100%"
                }}
              >
                Quiz Terminé !
              </Typography>
              <Typography className="correctAnswersTitle">
                Réponses correctes : {score} / {myQuestions.length}
                {/* Réponses correctes : {_score.correctAnswers} / {myQuestions.length} */}
              </Typography>
              <Typography className="inCorrectAnswersTitle">
                Réponses incorrectes : {incorrectAnswersList.length} /{" "}
                {myQuestions.length}
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#333", textAlign: "justify", mt: 0 }}
            >
              {incorrectAnswersList.map((element: any, index: number) => (
                <Typography key={index}>
                  <QuestionText className={"questionText"}>
                    Question : {element.question}
                  </QuestionText>
                  <GivenAnswers>
                    Réponse donnée:{" "}
                    {Object.keys(element.options)[Number(selectedOptions)]}
                    {`) ${Object.values(element.options)[Number(selectedOptions)]}`}
                    {/* {Object.values(element.options)[Number(selectedOptions)]} */}
                  </GivenAnswers>
                  <CorrectAnswers>
                    Bonne Réponse : {element.options[element.answer]}
                  </CorrectAnswers>
                  <CorrectAnswers>
                    Explication : {element.explanation}
                  </CorrectAnswers>
                </Typography>
              ))}
            </Typography>
            <UnansweredQuestionsTitle>
              Questions non répondues : {"unansweredQuestionsList"}
            </UnansweredQuestionsTitle>
          </Box>
        )}
      </QuizContainer>
    </GradientBackground>
  );
}
