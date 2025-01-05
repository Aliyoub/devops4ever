import React from "react";

const Circles = () => {
  return (
    <div
      style={{
        display: "flex",
        // opacity: 0.3, // Augmenté pour un meilleur contraste
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          border: "1px solid green", // Bleu le plus foncé
          borderRadius: "50%",
          backgroundColor: "green",
          marginLeft: "0px", // Pas de chevauchement pour le premier cercle
        }}
      ></div>
      <div
        style={{
          width: 20,
          height: 20,
          border: "1px solid #3069DE", // Bleu légèrement plus clair
          borderRadius: "50%",
          backgroundColor: "#1565C0",
          marginLeft: "-30px", // Chevauchement
        }}
      ></div>
      <div
        style={{
          width: 20,
          height: 20,
          border: "1px solid #FF0200", // Bleu légèrement plus clair
          borderRadius: "50%",
          backgroundColor: "#FF0200",
          marginLeft: "-30px", // Chevauchement
        }}
      ></div>
      <div
        style={{
          width: 20,
          height: 20,
          border: "1px solid yellow", // Bleu encore plus clair
          borderRadius: "50%",
          backgroundColor: "yellow",
          marginLeft: "-30px",
        }}
      ></div>
      <div
        style={{
          width: 20,
          height: 20,
          border: "1px solid #42A5F5", // Bleu clair
          borderRadius: "50%",
          backgroundColor: "#42A5F5",
          marginLeft: "-30px",
        }}
      ></div>
    </div>
  );
};

export default Circles;
