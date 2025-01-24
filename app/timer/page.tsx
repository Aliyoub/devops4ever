// app/quiz-timer/page.tsx
"use client";

import { useEffect, useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function QuizWithTimer() {
  // Définir la durée du timer (en secondes), ex. 300s = 5min
  const [timeLeft, setTimeLeft] = useState<number>(300);

  // État pour indiquer si le timer est terminé
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  useEffect(() => {
    // Si le temps est écoulé, on arrête
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    // Mettre en place un interval pour décrémenter la valeur
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Nettoyage de l'interval
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Convertir en minutes:secondes
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Rendu
  return (
    <main style={{ color: "#FCA4F0", fontSize: "1rem", paddingLeft: "5rem" }}>
      {isTimeUp ? (
        <span style={{ color: "red", fontSize: "1rem" }}>
          Le temps est écoulé !
        </span>
      ) : (
        <>
          <span style={{ color: "#FCA4F0", fontSize: "1rem" }}>
            <AccessTimeFilledIcon /> {minutes} min{" "}
            {seconds.toString().padStart(2, "0")} s
          </span>
          {/* <div
            style={{
              marginLeft: "1.5rem",
              fontSize: "1.2rem",
            }}
          >
            {minutes} min {seconds.toString().padStart(2, "0")} s
          </div> */}
          {/* Ici, placez votre composant de questions, la logique de quiz, etc. */}
        </>
      )}
    </main>
  );
}
