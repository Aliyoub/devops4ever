import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionTemplate from "./kubernetes/AccordionTemplate";
import QuizPage from "./kubernetes/quizPage";
import "./style.css"

const Kubernetes = () => {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#264BC0",
            borderBottom: "0.7px solid #FCA4F0",
            color: "#FCA4F0"
          }}
        >
          <h2>KUBERNETES</h2>
          </AccordionSummary>

        <AccordionTemplate
          accordionSummary="DEPANNAGE"
          quiz={<QuizPage />}
        />
      </Accordion>
  );
};

export default Kubernetes;
