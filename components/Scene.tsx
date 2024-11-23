"use client";

import React from "react";
import AnimatedObject from "./AnimatedObject";

const steps = [
  { color: "#3498db", label: "Code", position: { x: 10, y: 10 }, delay: 0 },
  { color: "#e74c3c", label: "Build", position: { x: 100, y: 50 }, delay: 0.5 },
  { color: "#f1c40f", label: "Containerize", position: { x: 50, y: 120 }, delay: 1 },
  { color: "#2ecc71", label: "Run", position: { x: 120, y: 180 }, delay: 1.5 },
];

const Scene: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px", // adapté pour les écrans de smartphone
        height: "300px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      {steps.map((step, index) => (
        <AnimatedObject
          key={index}
          color={step.color}
          label={step.label}
          position={step.position}
          delay={step.delay}
        />
      ))}
    </div>
  );
};

export default Scene;