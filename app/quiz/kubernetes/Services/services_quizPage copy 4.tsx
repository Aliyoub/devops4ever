"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
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

import { questions } from "./questionServices";

import { Roboto } from "next/font/google";
import "../../style.css";

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

export default function Services_quizPage() {

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="quizContainer">
        {/* On est sur cette interface tant qu'on n'a pas encore atteint la fin du questionnaire */}
        {currentQuestion < myQuestions.length ? (
          <>
            {/* <div className="QuestionText" variant="h6"> */}
            <Typography className={(roboto.className, "questionText")} variant="h6">
              {myQuestions[currentQuestion].question}
            </Typography>
            <FormControl style={{ width: "100%" }} component="fieldset">
              <RadioGroup
                value={selectedOptions[currentQuestion]}
                onChange={handleOptionChange}
              >
                {Object.values(myQuestions[currentQuestion]["options"]).map(
                  (option, index) => (
                    // {myQuestions[currentQuestion].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={index}
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
            className="previewButton"
          >
            Précédent
          </Button>
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            className="nextButton"
          >
            {currentQuestion < myQuestions.length - 1
              ? "Suivant"
              : "Voir le score"}
          </Button>
        </Box>
          </>
        ) : (
          // On est sur cette interface quand on atteint la fin du questionnaire
          <Box
            sx={{
              marginTop: 0,
            }}
          >
            <Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  mt: 2,
                  color: "#3B8FEF",
                  fontWeight: "bold",
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
                  <div className={"questionText"}>
                    Question : {element.question}
                  </div>
                  <div className="givenAnswers">
                    Réponse donnée:{" "}
                    {Object.keys(element.options)[Number(selectedOptions)]}
                    {`) ${Object.values(element.options)[Number(selectedOptions)]}`}
                    {/* {Object.values(element.options)[Number(selectedOptions)]} */}
                  </div>
                  <div className="correctAnswers">
                    Bonne Réponse : {element.options[element.answer]}
                  </div>
                  <div className="correctAnswers">
                    Explication : {element.explanation}
                  </div>
                </Typography>
              ))}
            </Typography>
            <div className="unansweredQuestionsTitle">
              Questions non répondues : {"unansweredQuestionsList"}
            </div>
          </Box>
        )}
      </div>
    </div>
  );
}
