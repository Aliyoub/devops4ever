"use client";
import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Answersound = () => {
  const handleCorrectAnswer = () => {
    const audio = new Audio("/public/sounds/correct-answer.mp3");
    audio.play();
  };

  const handleIncorrectAnswer = () => {
    const audio = new Audio("/public/sounds/incorrect-answer.mp3");
    audio.play();
  };
  useEffect(() => {
    handleIncorrectAnswer();
  });
  return <div>ss</div>;
  // Reste du composant...
};
export default Answersound;
