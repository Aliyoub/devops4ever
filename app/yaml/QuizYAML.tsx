"use client";

import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const quizQuestion = {
  yamlContent: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80`,
  question:
    "Quelle est la valeur de la clé `apiVersion` dans ce fichier YAML ?",
  options: ["a) v1", "b) apps/v1", "c) v2", "d) core/v1"],
  answer: "a) v1",
};

const QuizYAML = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    if (option === quizQuestion.answer) {
      setFeedback("✅ Bonne réponse !");
    } else {
      setFeedback("❌ Mauvaise réponse, essayez encore !");
    }
  };

  return (
    <div
      style={{
        padding: "0.5rem",
        maxWidth: "400px",
        margin: "0 auto",
        // height: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* Conteneur avec scroll pour mobile */}
      <h3>Analyser le fichier YAML suivant :</h3>
      <div
        style={{
          // height: "200px",
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "1rem",
        }}
      >
        <SyntaxHighlighter language="yaml" style={docco} wrapLongLines={true}>
          {quizQuestion.yamlContent}
        </SyntaxHighlighter>
      </div>

      {/* Affichage de la question */}
      <p>
        <strong>{quizQuestion.question}</strong>
      </p>

      {/* Options de réponse avec scroll si besoin */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {quizQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              backgroundColor:
                selectedAnswer === option ? "#a5d6a7" : "#e0e0e0",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}

        {/* Feedback dynamique */}
        {feedback && (
          <p
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              color: feedback.includes("✅") ? "green" : "red",
            }}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizYAML;
