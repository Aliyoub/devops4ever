import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Kubernetes from './kubernetes';

const Azerty = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          KUBERNETES
        </AccordionSummary>
        <AccordionDetails>
          <Kubernetes />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem Action2
        </AccordionDetails>
      </Accordion>


    </div>
  )
}

export default Azerty