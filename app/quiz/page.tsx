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

// Arrière-plan avec dégradé léger et uniforme
const GradientBackground = styled(Box)({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #3B8FEF, #FCA4F0)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   padding: '20px',
});

const QuizContainer = styled(Box)({
  //   maxWidth: '480px',
  width: "100%",
  padding: "24px",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

const QuestionText = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#FCA4F0",
  border: "0.5px solid #FCA4F0",
  backgroundColor: "#264BC0",
  padding: 3,
});

// const QuizSubContainer = styled(Typography)({
//   width: '100%',
//   backgroundColor: 'red',
//   color: '#FFFFFF'
// });

export default function MinimalistQuizPage() {
  const questions = useMemo(
    () => [
      {
        question: "Qu'est-ce que le DevOps ?",
        options: [
          "Un langage de programmation",
          "Un processus de développement et d’exploitation",
          "Un outil de gestion de versions",
          "Une base de données",
        ],
        answer: 1,
      },
      {
        question: "Quel est l’objectif principal de CI/CD ?",
        options: [
          "Créer des applications mobiles",
          "Automatiser le déploiement",
          "Développer en local",
          "Gestion de base de données",
        ],
        answer: 1,
      },
      {
        question: 'Que signifie "Infrastructure as Code" (IaC) ?',
        options: [
          "Configurer le matériel manuellement",
          "Gérer l’infrastructure via du code",
          "Coder des applications infrastructurelles",
          "Une méthode de déploiement CI/CD",
        ],
        answer: 1,
      },
      {
        question:
          "Quel outil est couramment utilisé pour l'automatisation de l'infrastructure dans DevOps ?",
        options: ["Jenkins", "Ansible", "Docker", "Kubernetes"],
        answer: 1,
      },
      {
        question: "Docker est utilisé pour...",
        options: [
          "Automatiser les tests",
          "Orchestrer des containers",
          "Créer des containers",
          "Déployer des applications sur le cloud",
        ],
        answer: 2,
      },
      {
        question: "Quel est le rôle de Kubernetes ?",
        options: [
          "Automatiser le déploiement de logiciels",
          "Gérer et orchestrer des containers",
          "Surveiller le code",
          "Créer des bases de données",
        ],
        answer: 1,
      },
      // {
      //   question: "Quelle est une pratique clé de DevOps ?",
      //   options: [
      //     "Déploiement en continu",
      //     "Codage en continu",
      //     "Mise à jour en continu",
      //     "Analyse en continu",
      //   ],
      //   answer: 0,
      // },
      // {
      //   question: "Quel est le principal avantage du déploiement en continu ?",
      //   options: [
      //     "Réduire les erreurs humaines",
      //     "Déployer des applications plus rapidement",
      //     "Faciliter le développement en local",
      //     "Améliorer la gestion de bases de données",
      //   ],
      //   answer: 1,
      // },
      // {
      //   question: "Git est principalement utilisé pour...",
      //   options: [
      //     "Suivre les modifications du code",
      //     "Orchestrer des conteneurs",
      //     "Déployer des applications",
      //     "Automatiser l’infrastructure",
      //   ],
      //   answer: 0,
      // },
      // {
      //   question: 'Que signifie "rollback" dans un pipeline de déploiement ?',
      //   options: [
      //     "Mettre à jour une application",
      //     "Revenir à une version précédente",
      //     "Archiver une version",
      //     "Déployer une application sur un autre serveur",
      //   ],
      //   answer: 1,
      // },
      // {
      //   question:
      //     "Quel service cloud est le plus populaire pour les applications DevOps ?",
      //   options: ["Google Cloud", "AWS", "Azure", "DigitalOcean"],
      //   answer: 1,
      // },
      // {
      //   question: 'Quel est l\'objectif du "monitoring" dans DevOps ?',
      //   options: [
      //     "Déployer plus rapidement",
      //     "Surveiller la santé et les performances du système",
      //     "Gérer les versions de code",
      //     "Automatiser les tâches de développement",
      //   ],
      //   answer: 1,
      // },
      // {
      //   question: "Terraform est utilisé pour...",
      //   options: [
      //     "La gestion de versions",
      //     "Le suivi de performance",
      //     "La gestion d’infrastructure en tant que code",
      //     "La création d’images de conteneurs",
      //   ],
      //   answer: 2,
      // },
      // {
      //   question: "Quel est le rôle de Jenkins dans DevOps ?",
      //   options: [
      //     "Automatiser les tests unitaires",
      //     "Surveiller l'infrastructure",
      //     "Orchestrer des conteneurs",
      //     "Automatiser le pipeline de CI/CD",
      //   ],
      //   answer: 3,
      // },
      // {
      //   question:
      //     "Quelle commande Git est utilisée pour fusionner des branches ?",
      //   options: ["git commit", "git clone", "git merge", "git pull"],
      //   answer: 2,
      // },
    ],
    []
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
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
      selectedOptions[currentQuestion] === questions[currentQuestion].answer
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
      if (selected === null) {
        unansweredQuestions += 1;
      } else if (selected === questions[index].answer) {
        correctAnswers += 1;
        console.log("questions[index].answer", questions[index].answer);
        console.log("questions[index].answer", questions[index]);
      } else {
        incorrectAnswers.push(questions[index]);
      }
    });
    setIncorrectAnswersList(incorrectAnswers);
    setUnansweredQuestionsList(unansweredQuestions);
    // setScore(correctAnswers)
    // return { correctAnswers, incorrectAnswers, unansweredQuestions };
    //   }
  }, [selectedOptions, questions]);

  //   const _score =  useMemo(() => calculateScore(),[]);
  //   const _score = calculateScore();
  return (
    <GradientBackground>
      <QuizContainer>
        {currentQuestion < questions.length ? (
          <>
            <QuestionText variant="h6">
              {questions[currentQuestion].question}
            </QuestionText>
            <FormControl style={{ width: "100%" }} component="fieldset">
              <RadioGroup
                value={selectedOptions[currentQuestion]}
                onChange={handleOptionChange}
              >
                {questions[currentQuestion].options.map((option, index) => (
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
                ))}
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
                {currentQuestion < questions.length - 1
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
            <Typography variant="h6" sx={{ color: "#333", mt: 2 }}>
              Réponses correctes : {score} / {questions.length}
              {/* Réponses correctes : {_score.correctAnswers} / {questions.length} */}
            </Typography>
              <Typography variant="h6" sx={{ color: "#333", mt: 2 }}>
                Réponses incorrectes : {incorrectAnswersList.length} /{" "}
                {questions.length}
              </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#333", textAlign: "justify", mt: 1 }}
            >
              {incorrectAnswersList.map((element: any, index: number) => (
                <>
                  <Typography key={index}>
                    Question : {element.question}
                  </Typography>
                  <Typography key={index}>
                    Réponse donnée : {element.options[index]}
                  </Typography>
                  <Typography key={index}>
                    Bonne Réponse : {element.options[element.answer]}
                  </Typography>
                </>
              ))}
            </Typography>
            <Typography variant="h6" sx={{ color: "#333", mt: 1 }}>
              Questions non répondues : {unansweredQuestionsList}
            </Typography>
          </Box>
        )}
      </QuizContainer>
    </GradientBackground>
  );
}
