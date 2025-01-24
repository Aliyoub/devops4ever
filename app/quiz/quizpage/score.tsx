"use client";
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import "../../../app/score.css";

interface ScoreProps {
  userAnswers: Record<number, string>;
  questions: {
    question_id: number;
    question: string;
    options: string[];
    answer: string;
  }[];
}

const Score: React.FC<ScoreProps> = ({ userAnswers, questions }) => {
  const correctAnswers = questions?.filter(
    (question, index) => userAnswers[index] === question.answer
  );

  const incorrectAnswers = questions?.filter(
    (question, index) =>
      userAnswers[index] && userAnswers[index] !== question.answer
  );

  const unansweredQuestions = questions?.filter(
    (question, index) => userAnswers[index] === undefined
  );

  useEffect(() => {
    console.log("questions", questions);
    console.log("userAnswers", userAnswers);
  }, [correctAnswers, incorrectAnswers, unansweredQuestions]);

  return (
    <Box className="score-container">
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        className="quiz-title"
      >
        Résultats du Quiz
      </Typography>

      {/* Statistiques */}
      <Box className="quiz-stats">
        <Typography variant="h6" className="stat-title">
          Statistiques
        </Typography>
        <Typography className="correct-answers">
          Réponses correctes : {correctAnswers?.length}
        </Typography>
        <Typography className="incorrect-answers">
          Réponses incorrectes : {incorrectAnswers?.length}
        </Typography>
        <Typography className="unanswered-questions">
          Questions non répondues : {unansweredQuestions?.length}
        </Typography>
      </Box>

      {/* Réponses incorrectes */}
      {incorrectAnswers.length > 0 && (
        <Box className="incorrect-section">
          <Typography variant="h6" className="incorrect-title">
            Questions avec réponses incorrectes
          </Typography>
          <List>
            {incorrectAnswers.map((question, index) => (
              <React.Fragment key={question.question_id}>
                <ListItem>
                  <ListItemText
                    primary={`Question : ${question.question}`}
                    secondary={`Votre réponse : ${userAnswers[index]} | Réponse correcte : ${question.answer}`}
                    className="incorrect-item"
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}

      {/* Questions non répondues */}
      {unansweredQuestions.length > 0 && (
        <Box>
          <Typography variant="h6" className="unanswered-title">
            Questions non répondues
          </Typography>
          <List>
            {unansweredQuestions.map((question) => (
              <React.Fragment key={question.question_id}>
                <ListItem>
                  <ListItemText
                    primary={`Question : ${question.question}`}
                    secondary={`Réponse correcte : ${question.answer}`}
                    className="unanswered-item"
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Score;
