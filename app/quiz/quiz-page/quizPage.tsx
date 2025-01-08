"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Score from "./score";
import Quizquestions from "./quizQuestions";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type QuizPageProps = {
  quizQuestions: any[];
};

// Composant principal du quiz
const Quizpage = ({ quizQuestions }: QuizPageProps) => {
  const quizSize = useSelector((state: RootState) => state.quizSize.value);
  const quizStartIndex =
    useSelector((state: RootState) => state.quizStartIndex.value) - 1;

  const theSliceQuestions = quizQuestions.slice(
    quizStartIndex,
    quizStartIndex + quizSize
  );
  // const theSliceQuestions = useMemo(
  //   () => quizQuestions.slice(quizStartIndex, quizStartIndex + quizSize),
  //   [quizStartIndex, quizSize]
  // );

  // État pour suivre l'index de la question courante
  // useState(0) => dès le départ, on est positionné sur la première question
  const [currentIndex, setCurrentIndex] = useState(0);

  // État pour suivre les réponses de l'utilisateur
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const [isGoodAnswer, setIsGoodAnswer] = useState(false);
  const [isValidateButtonHidden, setIsValidateButtonHidden] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isFormControlLabelDisabled, setIsFormControlLabelDisabled] =
    useState(false);

  // Fonction pour gérer les sélections de réponse
  // const handleAnswerSelection = (answer: string) => {
  //   // setIsRadioSelected(!!userAnswers[currentIndex]);
  //   // setIsRadioSelected(true);
  //   setUserAnswers({ ...userAnswers, [currentIndex]: answer });
  // };

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

  const handleValidate = () => {
    // Activer le bouton Suivant
    if (userAnswers[currentIndex] === quizQuestions[currentIndex].answer) {
      setIsGoodAnswer(true);
      // Message : Bonne reponse

      console.log("isGoodAnswer", isGoodAnswer);
    } else if (
      userAnswers[currentIndex] !== quizQuestions[currentIndex].answer
    ) {
      setIsGoodAnswer(false);
      console.log("isGoodAnswer", isGoodAnswer);
    }
    setIsFormControlLabelDisabled(true); // Désactiver la selection
    setIsNextButtonDisabled(false); // Activer le bouton suivant
    setIsValidateButtonHidden(true); // Faire disparaître le bouton valider
  };

  // useEffect(() => {
  //   const correctAnswers = quizQuestions.filter(
  //     (question, index) => userAnswers[currentIndex] === question.answer
  //   );
  //   console.log("correctAnswers", correctAnswers);
  // });

  // useEffect(() => {
  //   // const isRadioSelected = !!userAnswers[currentIndex];
  //   console.log("first", isRadioSelected);
  // }, [isRadioSelected]);

  // Rendu du composant
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      {currentIndex < theSliceQuestions.length ? (
        /* Interface questionnaire */
        <Quizquestions
          question={theSliceQuestions[currentIndex]}
          userAnswer={userAnswers[currentIndex]}
          onAnswerSelection={handleAnswerSelection}
          onNext={handleNext}
          onPreview={handlePreview}
          onValidate={handleValidate}
          hideValidate={isValidateButtonHidden} // cacher ou non le bouton valider
          formControlLabelDisabled={isFormControlLabelDisabled}
          disableValidate={!userAnswers[currentIndex]} // désactiver ou non le bouton valider
          isGoodAnswer={isGoodAnswer}
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
};

// Exportation du composant
export default Quizpage;
