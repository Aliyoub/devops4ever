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
          width: 40,
          height: 40,
          border: "1px solid #FC6D26", // Bleu le plus foncé
          borderRadius: "50%",
          backgroundColor: "#FC6D26",
          marginLeft: "0px", // Pas de chevauchement pour le premier cercle
        }}
      ></div>
      <div
        style={{
          width: 40,
          height: 40,
          border: "1px solid #9B79F2", // Bleu légèrement plus clair
          borderRadius: "50%",
          backgroundColor: "#9B79F2",
          marginLeft: "-30px", // Chevauchement
        }}
      ></div>
      <div
        style={{
          width: 40,
          height: 40,
          border: "1px solid #FF0200", // Bleu légèrement plus clair
          borderRadius: "50%",
          backgroundColor: "#FF0200",
          marginLeft: "-30px", // Chevauchement
        }}
      ></div>
      <div
        style={{
          width: 40,
          height: 40,
          border: "1px solid #FDC1F5", // Bleu encore plus clair
          borderRadius: "50%",
          backgroundColor: "#FDC1F5",
          marginLeft: "-30px",
        }}
      ></div>
      <div
        style={{
          width: 40,
          height: 40,
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
