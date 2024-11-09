import React, { Component, ComponentProps, ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// interface AccordionTemplateProps {
//   accordionSummary: string;
//   quiz: ReactNode
// }

type Props ={
    accordionSummary: string;
    quiz: any
  }

const AccordionTemplate = ({
  accordionSummary,
  quiz
}: Props) => {

// const AccordionTemplate = ({
//   accordionSummary, quiz
// }) => {
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Quiz
          </AccordionSummary>
          <AccordionDetails>{quiz}</AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Question / Réponse
          </AccordionSummary>
          <AccordionDetails>Question / Réponse Détails</AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
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
