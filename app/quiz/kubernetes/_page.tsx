import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import router from "next/router";
import CommandesKubernetesStorage from "../../revisions/cka/storage/read/commands/page";
import { colors } from "@mui/material";
import AccordionTemplate from "./AccordionTemplate";
// import ClusterManagementQuiz from "./cka/troubleshooting/ClusterManagementQuiz";
// import ClusterManagementQuiz from "../../../cka/troubleshooting/quiz/page";
import ClusterManagementQuiz from "../../revisions/cka/troubleshooting/quiz/page";
import QuizPage from "./quizPage";


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
          {/* <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>KUBERNETES</h2> */}    
          </AccordionSummary>

        <AccordionTemplate
          accordionSummary="DEPANNAGE"
          quiz={<QuizPage />}
        />


        
        {/* <AccordionTemplate
          accordionSummary="CLUSTER ARCHITECTURE"
        />
        <AccordionTemplate
          accordionSummary="SERVICE ET RESEAUX"
        />
        <AccordionTemplate
          accordionSummary="STOCKAGE"
        /> */}


      </Accordion>
  );
};

export default Kubernetes;
