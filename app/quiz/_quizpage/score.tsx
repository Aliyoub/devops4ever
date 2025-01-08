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
  // Calcul des réponses correctes
  const correctAnswers = questions?.filter(
    (question, index) => userAnswers[index] === question.answer
  );

  // Calcul des réponses incorrectes
  const incorrectAnswers = questions?.filter(
    (question, index) =>
      userAnswers[index] && userAnswers[index] !== question.answer
  );

  // Calcul des questions non répondues
  const unansweredQuestions = questions?.filter(
    (question, index) => userAnswers[index] === undefined
  );
  useEffect(() => {
    console.log("questions", questions);
    console.log("userAnswers", userAnswers);
  }, [correctAnswers, incorrectAnswers, unansweredQuestions]);
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        border: "2px solid #3B8FEF",
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
        maxHeight: "600px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ color: "#264BC0", fontWeight: "bold" }}
      >
        Résultats du Quiz
      </Typography>

      {/* Statistiques */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ color: "#264BC0" }}>
          Statistiques
        </Typography>
        <Typography sx={{ color: "#3B8FEF", fontWeight: "bold" }}>
          Réponses correctes : {correctAnswers?.length}
        </Typography>
        <Typography sx={{ color: "#FCA4F0", fontWeight: "bold" }}>
          Réponses incorrectes : {incorrectAnswers?.length}
        </Typography>
        <Typography sx={{ color: "#264BC0", fontWeight: "bold" }}>
          Questions non répondues : {unansweredQuestions?.length}
        </Typography>
      </Box>

      {/* Réponses incorrectes */}
      {incorrectAnswers.length > 0 && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ color: "#FCA4F0" }}>
            Questions avec réponses incorrectes
          </Typography>
          <List>
            {incorrectAnswers.map((question, index) => (
              <React.Fragment key={question.question_id}>
                <ListItem>
                  <ListItemText
                    primary={`Question : ${question.question}`}
                    secondary={`Votre réponse : ${userAnswers[index]} | Réponse correcte : ${question.answer}`}
                    primaryTypographyProps={{ sx: { color: "#264BC0" } }}
                    secondaryTypographyProps={{ sx: { color: "#3B8FEF" } }}
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
          <Typography variant="h6" sx={{ color: "#264BC0" }}>
            Questions non répondues
          </Typography>
          <List>
            {unansweredQuestions.map((question) => (
              <React.Fragment key={question.question_id}>
                <ListItem>
                  <ListItemText
                    primary={`Question : ${question.question}`}
                    secondary={`Réponse correcte : ${question.answer}`}
                    primaryTypographyProps={{ sx: { color: "#264BC0" } }}
                    secondaryTypographyProps={{ sx: { color: "#3B8FEF" } }}
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
