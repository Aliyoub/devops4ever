"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Score from "./score";
import Quizquestions from "./quizQuestions";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface QuizPageProps {
  quizQuestions: any[];
}

// Composant principal du quiz
// const Quizpage = ({ quizQuestions }: QuizPageProps) => {
export default function Quizpage({ quizQuestions }: QuizPageProps) {
  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const quizStartIndex =
    useSelector((state: RootState) => state.quizStartIndex.value) - 1;

  const theSliceQuestions = quizQuestions.slice(
    quizStartIndex,
    quizStartIndex + quizSize
  );

  // État pour suivre l'index de la question courante
  // useState(0) => dès le départ, on est positionné sur la première question
  const [currentIndex, setCurrentIndex] = useState(0);

  // État pour suivre les réponses de l'utilisateur
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const [isValidateButtonHidden, setIsValidateButtonHidden] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isFormControlLabelDisabled, setIsFormControlLabelDisabled] =
    useState(false);

  const handleAnswerSelection = (answer: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentIndex]: answer,
    }));
  };

  // Fonction pour gérer le bouton "Suivant"
  const handleNext = () => {
    setIsValidateButtonHidden(false); // Faire réapparaître le bouton valider
    setIsFormControlLabelDisabled(false); // réactiver la selection
    setIsNextButtonDisabled(true); // Désactiver le bouton suivant

    if (currentIndex < theSliceQuestions.length) {
      // if (currentIndex < theSliceQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fonction pour gérer le bouton "Preview"
  const handlePreview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleValidate2 = () => {
    const goodAnswerAudio = new Audio("/sounds/correct-answer.mp3");
    const badAnswerAudio = new Audio("/sounds/incorrect-answer.mp3");
    // Activer le bouton Suivant
    if (userAnswers[currentIndex] === quizQuestions[currentIndex].answer) {
      // Message : Bonne reponse
      goodAnswerAudio.play();
    } else if (
      userAnswers[currentIndex] !== quizQuestions[currentIndex].answer
    ) {
      badAnswerAudio.play();
    }
    setIsFormControlLabelDisabled(true); // Désactiver la selection
    setIsNextButtonDisabled(false); // Activer le bouton suivant
    setIsValidateButtonHidden(true); // Faire disparaître le bouton valider
  };

  // ::::::::::::::: Pour avoir la route de l'api concernée  :::::::::::::::
  // bloc à externaliser
  const child = useSelector((state: RootState) => state.child.value);
  function apiRoute(child: any) {
    if (child === "Cluster Architecture") {
      return "cluster-architecture";
    }
    // else if()...
    return "";
  }
  // ::::::::::::::: /Pour avoir la route de l'api concernée  :::::::::::::::

  const handleValidate = () => {
    const goodAnswerAudio = new Audio("/sounds/correct-answer.mp3");
    const badAnswerAudio = new Audio("/sounds/incorrect-answer.mp3");

    fetch(`/api/quiz/${apiRoute(child)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question_id: quizQuestions[currentIndex].question_id,
        userAnswer: userAnswers[currentIndex],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.correct === true) {
          console.log("correct data", data.userGoodAnswers);
          true;
          // Message : Bonne reponse
          goodAnswerAudio.play();
        } else if (data.correct === false) {
          console.log("uncorrect data", data.userBadAnswers);
          // Message : Mauvaise reponse
          false;
          badAnswerAudio.play();
        }

        setIsFormControlLabelDisabled(true); // Désactiver la selection
        setIsNextButtonDisabled(false); // Activer le bouton suivant
        setIsValidateButtonHidden(true); // Faire disparaître le bouton valider
      });
  };

  // Rendu du composant
  return (
    <Box sx={{ width: "100%", margin: "auto", textAlign: "center" }}>
      {currentIndex < theSliceQuestions.length ? (
        /* Interface questionnaire */
        <Quizquestions
          question={theSliceQuestions[currentIndex]}
          userAnswer={userAnswers[currentIndex]}
          onAnswerSelection={handleAnswerSelection}
          onNext={handleNext}
          onQuit={handlePreview}
          onValidate={handleValidate}
          hideValidate={isValidateButtonHidden} // cacher ou non le bouton valider
          formControlLabelDisabled={isFormControlLabelDisabled}
          disableValidate={!userAnswers[currentIndex]} // désactiver ou non le bouton valider
          // disableNext={currentIndex === theSliceQuestions.length - 1}
          disableNext={isNextButtonDisabled}
          disablePreview={currentIndex === 0}
          isLastQuestion={currentIndex === theSliceQuestions.length - 1}
        />
      ) : (
        /* Affichage des statistiques */
        <Score userAnswers={userAnswers} questions={theSliceQuestions} />
      )}
    </Box>
  );
}
