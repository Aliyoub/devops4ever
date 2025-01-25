"use client";

import { useEffect, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Button,
  styled,
  FormControl,
  InputLabel,
  Select,
  Slider,
  MenuItem,
} from "@mui/material";

interface Voice {
  name: string;
  // Ajoutez d'autres propriétés si nécessaire.
}
interface SpeechSynthesisVoice {
  // name: string;
  // Ajoutez d'autres propriétés si nécessaire.
}

export default function FetchLimitedContent() {
  const [content, setContent] = useState("");
  const [voices, setVoices] = useState([]);
  // const [selectedVoice, setSelectedVoice] = useState(null);
  // const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [pitch, setPitch] = useState(1); // Tonalité
  const [volume, setVolume] = useState(0.5); // Volume
  const [rate, setRate] = useState(0.8); // Vitesse initiale
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // const body = document.querySelector("body");
    // if (body && body.hasAttribute("cz-shortcut-listen")) {
    //   body.removeAttribute("cz-shortcut-listen");
    // }
    async function fetchData() {
      const response = await fetch("/api/mycontents");
      const data = await response.json();
      console.log("first content", data.content);
      setContent(data.content);
    }
    fetchData();

    const loadVoices = () => {
      let availableVoices: any = [];
      availableVoices = window.speechSynthesis.getVoices();
      console.log("Voices disponibles :", availableVoices);
      const areVoicesAvailable = availableVoices.length > 0;

      if (areVoicesAvailable) {
        setVoices(availableVoices);
        setSelectedVoice(availableVoices[5]);
      }
    };

    // Charger les voix après un délai (certains navigateurs asynchrones)
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      // Nettoyer l'écouteur pour éviter les fuites de mémoire
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleSpeak = () => {
    if (!content) {
      console.log("Aucun texte à lire !");
      return;
    }

    // =============
    // const voices = window.speechSynthesis.getVoices();
    const utterance: any = new SpeechSynthesisUtterance(content);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      console.warn(
        "The selected voice is not valid or not found in available voices."
      );
    }

    // =============

    // const utterance = new SpeechSynthesisUtterance(content);
    // if (selectedVoice) {
    //   utterance.voice = selectedVoice; // Appliquer la voix sélectionnée
    // }

    utterance.rate = rate; // Appliquer la vitesse
    utterance.volume = volume;
    utterance.pitch = pitch;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // On désactive handlePause() pour l'instant car engendre des erreurs
  const handlePause = () => {
    if (isSpeaking) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
      // speechSynthesis.resume() doit être appelé si la synthèse est en pause.
      window.speechSynthesis.resume();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "15rem",
        paddingTop: "1rem",
        backgroundColor: "#FFFFFF",
      }}
    >
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel id="voice-select-label">Voix</InputLabel>
        <Select
          labelId="voice-select-label"
          value={selectedVoice ? selectedVoice.name : ""}
          onChange={(e: any) =>
            setSelectedVoice(
              selectedVoice
              // voices.find((voice: any) => voice.name === e.target.value)
            )
          }
        >
          {voices.map((voice: any) => (
            <MenuItem key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{ marginBottom: "20px" }}>
        <InputLabel style={{ marginBottom: "10px" }}>
          Volume : {volume.toFixed(1)}
        </InputLabel>
        <Slider
          value={volume}
          onChange={(e: any, newValue: any) => setVolume(newValue)}
          min={0}
          max={1}
          step={0.1}
          valueLabelDisplay="auto"
        />
      </div>
      <Button
        onClick={handleSpeak}
        disabled={isSpeaking}
        style={{ marginRight: "10px" }}
        id="speakButton"
      >
        {isSpeaking ? "Lecture en cours..." : "Ecouter"}
      </Button>

      {/* <Button onClick={handlePause} disabled={!isSpeaking}>
        Pause
      </Button> */}

      <Button onClick={handleStop} disabled={!isSpeaking}>
        Arrêter
      </Button>

      <label style={{ marginRight: "10px" }}>
        Vitesse : {rate.toFixed(1)}x
      </label>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
}
