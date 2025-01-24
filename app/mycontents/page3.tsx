"use client";

import { useState, useEffect } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      console.error(
        "L'API Web Speech n'est pas prise en charge par ce navigateur."
      );
    } else {
      console.log("L'API Web Speech est prise en charge.");
    }

    async function fetchData() {
      const response = await fetch("/api/mycontents");
      const data = await response.json();
      console.log("first content", data.content);
      setText(data.content);
    }
    fetchData();
  }, []);

  const handleSpeak = () => {
    if (!text) {
      console.log("Aucun texte à lire !");
      return;
    }
    console.log("du texte à lire !");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    // Lancer la synthèse vocale
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100); // Attendre que les voix soient prêtes

    // speechSynthesis.resume() doit être appelé si la synthèse est en pause.
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Text to Speech</h2>
      {/* <textarea
        placeholder="Entrez votre texte ici..."
        value={text}
        onChange={(e) => setText("e.target.value")}
        rows="5"
        cols="40"
        style={{ marginBottom: "10px", resize: "none" }}
      /> */}
      <br />
      <button
        onClick={handleSpeak}
        // disabled={isSpeaking}
        style={{ marginRight: "10px" }}
      >
        Ecouter
        {/* {isSpeaking ? "Lecture en cours..." : "Parler"} */}
      </button>
      <button onClick={handleStop} disabled={!isSpeaking}>
        Arrêter
      </button>
    </div>
  );
};

export default TextToSpeech;
