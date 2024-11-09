import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import router from "next/router";
import CommandesKubernetesStorage from "../revisions/cka/storage/read/commands/page";
import { lightBlue } from "@mui/material/colors";

const AWS = () => {
    return (
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{color:'#FCA4F0'}} />}
          aria-controls="panel1-content"
          id="panel1-header"  
          style={{backgroundColor: '#264BC0'}}        
        >
          <h2>AWS</h2>
          {/* <h2 style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>KUBERNETES</h2> */}
        </AccordionSummary>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  style={{color:'#FCA4F0'}} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            QUIZ
          </AccordionSummary>
          <AccordionDetails>
            <CommandesKubernetesStorage />
          </AccordionDetails>
        </Accordion>



        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  style={{color:'#FCA4F0'}} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            QUESTION / REPONSE
          </AccordionSummary>
          <AccordionDetails>
          QUESTION / REPONSE
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon  style={{color:'#FCA4F0'}} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            LECTURE
          </AccordionSummary>
          <AccordionDetails>
          LECTURE
          </AccordionDetails>
        </Accordion>

      </Accordion>
    </div>
      );
}

export default AWS