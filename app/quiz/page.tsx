'use client'

import React, { useState } from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Container } from '@mui/material';
import { styled } from '@mui/system';

// Arrière-plan avec dégradé léger et uniforme
const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #3B8FEF, #FCA4F0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
//   padding: '20px',
});

const QuizContainer = styled(Box)({
//   maxWidth: '480px',
  width: '100%',
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const QuestionText = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: '#FCA4F0',
  border: '0.5px solid #FCA4F0',
  backgroundColor: '#264BC0',
  padding: 3
});

// const QuizSubContainer = styled(Typography)({
//   width: '100%',
//   backgroundColor: 'red',
//   color: '#FFFFFF'
// });



export default function MinimalistQuizPage() {
  const questions = [
    {
      question: 'Qu\'est-ce que le DevOps ?',
      options: ['Un langage de programmation', 'Un processus de développement et d’exploitation', 'Un outil de gestion de versions', 'Une base de données'],
      answer: 1,
    },
    {
      question: 'Quel est l’objectif principal de CI/CD ?',
      options: ['Créer des applications mobiles', 'Automatiser le déploiement', 'Développer en local', 'Gestion de base de données'],
      answer: 1,
    },
    // Ajoutez d'autres questions ici si nécessaire
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handleOptionChange = (event: any) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = parseInt(event.target.value, 10);
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    if (selectedOptions[currentQuestion] === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;

    selectedOptions.forEach((selected, index) => {
      if (selected === null) {
        unansweredQuestions += 1;
      } else if (selected === questions[index].answer) {
        correctAnswers += 1;
      } else {
        incorrectAnswers += 1;
      }
    });

    return { correctAnswers, incorrectAnswers, unansweredQuestions };
  };

  const _score = calculateScore();

  return (
    <GradientBackground>
      <QuizContainer>
        {currentQuestion < questions.length ? (
          <>
            <QuestionText variant="h6">{questions[currentQuestion].question}</QuestionText>
            {/* <QuestionText style={{width: '100%', paddingLeft: 10}} variant="h6">{questions[currentQuestion].question}</QuestionText> */}
            {/* <FormControl component="fieldset"> */}
            <FormControl style={{width: '100%',}} component="fieldset">
              <RadioGroup value={selectedOptions[currentQuestion]} onChange={handleOptionChange}>
                {questions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio sx={{ color: '#3B8FEF', '&.Mui-checked': { color: '#FCA4F0' } }} />}
                    label={<Typography sx={{ color: '#FFFFFF', fontSize: '1rem' }}>{option}</Typography>}
                    style={{backgroundColor: '#264BC0', borderBottom: '0.5px solid #FCA4F0',padding: 0, margin: 0, width: '100%'}}  
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
                  color: '#3B8FEF',
                  borderColor: '#3B8FEF',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#FCA4F0', borderColor: '#3B8FEF' },
                }}
              >
                Précédent
              </Button>
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                disabled={selectedOptions[currentQuestion] === null}
                sx={{
                  backgroundColor: '#3B8FEF',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#3B8FEF' },
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Suivant' : 'Voir le score'}
              </Button>
            </Box>
          </>
        ) : (
            <Box>
            <Typography variant="h4" sx={{ color: '#3B8FEF', fontWeight: 'bold' }}>
              Quiz Terminé !
            </Typography>
            <Typography variant="h6" sx={{ color: '#333', mt: 2 }}>
              Réponses correctes : {_score.correctAnswers} / {questions.length}
            </Typography>
            <Typography variant="h6" sx={{ color: '#333', mt: 1 }}>
              Réponses incorrectes : {_score.incorrectAnswers}
            </Typography>
            <Typography variant="h6" sx={{ color: '#333', mt: 1 }}>
              Questions non répondues : {_score.unansweredQuestions}
            </Typography>
          </Box>
        )}
      </QuizContainer>
    </GradientBackground>
  );
}
