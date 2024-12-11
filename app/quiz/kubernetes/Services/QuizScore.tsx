import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import "../../../../app/styles.css";

type QuizScoreProps = {
  score: number;
  totalQuestions: number;
  incorrectAnswers: object[];
  unansweredQuestions: object[];
};

const QuizScore: React.FC<QuizScoreProps> = ({
  score,
  totalQuestions,
  incorrectAnswers,
  unansweredQuestions,
}) => {
  const router = useRouter();
  return (
    <Box>
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
        Réponses correctes : {score} / {totalQuestions}
      </Typography>
      <Typography className="inCorrectAnswersTitle">
        Réponses incorrectes : {incorrectAnswers.length} / {totalQuestions}
      </Typography>
      <Typography className="unansweredQuestionsTitle">
        Questions non répondues : {unansweredQuestions.length}
      </Typography>
      <Box mt={2}>
        {incorrectAnswers.map((question: any, index) => (
          <Box key={index} mb={2}>
            <Typography variant="body1">
              <strong>Question :</strong> {question.question}
            </Typography>
            <Typography variant="body2">
              <strong>Bonne réponse :</strong> {question.answer}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Button
          className={"nextButton"}
          variant="contained"
          onClick={router.push("/quiz", undefined, { shallow: true })}
        >
          {"Retour"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizScore;
