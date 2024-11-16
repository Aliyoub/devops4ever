"use client";

import React, { Component, ComponentProps, ReactNode, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../style.css"

// interface AccordionTemplateProps {
//   accordionSummary: string;
//   quiz: ReactNode
// }

type Props = {
  accordionSummary: string;
  quiz: any;
};

const AccordionTemplate = ({ accordionSummary, quiz }: Props) => {
  const [expanded, setExpanded] = useState(null);

  // Fonction de gestion du clic
  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    // Si le panneau est déjà ouvert, on le ferme, sinon on l'ouvre
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <Accordion>
      {/* <Accordion style={{width: '100%',marginBottom: "0.7px solid #FCA4F0", }}> */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
        aria-controls="panel2-content"
        id="panel2-header"
        style={{
          backgroundColor: "#3b8fef",
          //   backgroundColor: "#D4E3FD",
          color: "#FCA4F0",
          fontSize: 12,
          fontWeight: "bolder",
        }}
      >
        {accordionSummary}
      </AccordionSummary>

      <AccordionDetails style={{ padding: 0 }}>
        {/* <AccordionDetails style={{padding:0,margin:0,  backgroundColor: 'green', borderBottom: "0.7px solid #FCA4F0", }}> */}
        <Accordion
          expanded={expanded === "quizPanel"}
          onChange={handleChange("quizPanel")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="quizPanel-content"
            id="quizPanel-header"
          >
            Quiz
          </AccordionSummary>
          <AccordionDetails>{quiz}</AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "questionAnswerPanel"}
          onChange={handleChange("questionAnswerPanel")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="questionAnswerPanel-content"
            id="questionAnswerPanel-header"
          >
            Question / Réponse
          </AccordionSummary>
          <AccordionDetails>Question / Réponse Détails</AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "readingPanel"}
          onChange={handleChange("readingPanel")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="readingPanel-content"
            id="readingPanel-header"
          >
            Lecture
          </AccordionSummary>
          <AccordionDetails>Lecture Détails</AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionTemplate;
