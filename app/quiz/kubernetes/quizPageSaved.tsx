"use client";

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
} from "@mui/material";
import { styled } from "@mui/system";
import { questions } from "./questionServices";

// Arrière-plan avec dégradé léger et uniforme
const GradientBackground = styled(Box)({
  //   minHeight: "100vh",
  //   background: "linear-gradient(135deg, #3B8FEF, #FCA4F0)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   padding: '20px',
});

const QuizContainer = styled(Box)({
  //   maxWidth: '480px',
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  marginBottom: "10px",
});

const QuestionText = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 3,
});
const GivenAnswers = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FFFFFF",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 3,
});
const CorrectAnswers = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FFFFFF",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#3B8FEF",
  padding: 3,
});

const CorrectAnswersTitle = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#264BC0",
  padding: 3,
});

const IncorrectAnswersTitle = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#264BC0",
  padding: 3,
});

const UnansweredQuestionsTitle = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#264BC0",
  padding: 3,
});

export default function QuizPage() {
  const sizeOfarrayDesired = 5;
  const myQuestions = useMemo(
    () => questions.slice(1, sizeOfarrayDesired + 1),
    []
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(myQuestions.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const [incorrectAnswersList, setIncorrectAnswersList] = useState([]);
  const [unansweredQuestionsList, setUnansweredQuestionsList] = useState(0);

  const handleOptionChange = (event: any) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = parseInt(event.target.value, 10);
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
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  useEffect(() => {
    //   const calculateScore = () => {
    let correctAnswers = 0;
    let incorrectAnswers: any = [];
    let unansweredQuestions = 0;

    selectedOptions.forEach((selected, index) => {
      console.log("selected", selected);
      if (selected === null) {
        unansweredQuestions += 1;
      } else if (selected === myQuestions[currentQuestion].answer) {
        // } else if (selected === myQuestions[index].answer) {
        correctAnswers += 1;
        console.log("myQuestions[index].answer", myQuestions[index].answer);
        console.log("myQuestions[index].answer", myQuestions[index]);
      } else {
        incorrectAnswers.push(myQuestions[index]);
      }
    });
    setIncorrectAnswersList(incorrectAnswers);
    setUnansweredQuestionsList(unansweredQuestions);
    // setScore(correctAnswers)
    // return { correctAnswers, incorrectAnswers, unansweredQuestions };
    //   }
  }, [selectedOptions, myQuestions]);

  //   const _score =  useMemo(() => calculateScore(),[]);
  //   const _score = calculateScore();
  return (
    <GradientBackground>
      <QuizContainer>
        {currentQuestion < myQuestions.length ? (
          <>
            <QuestionText variant="h6">
              {myQuestions[currentQuestion].question}
            </QuestionText>
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
                      control={
                        <Radio
                          sx={{
                            color: "#3B8FEF",
                            "&.Mui-checked": { color: "#FCA4F0" },
                          }}
                        />
                      }
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
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "#3B8FEF", fontWeight: "bold" }}
            >
              Quiz Terminé !
            </Typography>
            <CorrectAnswersTitle>
              Réponses correctes : {score} / {myQuestions.length}
              {/* Réponses correctes : {_score.correctAnswers} / {myQuestions.length} */}
            </CorrectAnswersTitle>
            <IncorrectAnswersTitle>
              Réponses incorrectes : {incorrectAnswersList.length} /{" "}
              {myQuestions.length}
            </IncorrectAnswersTitle>
            <Typography
              variant="h6"
              sx={{ color: "#333", textAlign: "justify", mt: 1 }}
            >
              {incorrectAnswersList.map((element: any, index: number) => (
                <Typography key={index}>
                  <QuestionText>Question : {element.question}</QuestionText>
                  <GivenAnswers>
                    Réponse donnée : {element.options[index]}
                  </GivenAnswers>
                  <CorrectAnswers>
                    Bonne Réponse : {element.options[element.answer]}
                  </CorrectAnswers>
                </Typography>
              ))}
            </Typography>
            <UnansweredQuestionsTitle>
              Questions non répondues : {unansweredQuestionsList}
            </UnansweredQuestionsTitle>
          </Box>
        )}
      </QuizContainer>
    </GradientBackground>
  );
}
