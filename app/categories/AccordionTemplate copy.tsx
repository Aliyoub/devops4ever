import React, { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionTemplateProps {
  accordionSummary: string;
  accordionDetails: any;
//   accordionDetails: ReactNode;
}

const AccordionTemplate = ({
  accordionSummary,
  accordionDetails,
}: AccordionTemplateProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "#FCA4F0" }} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        {accordionSummary}
      </AccordionSummary>
      <AccordionDetails>{accordionDetails}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionTemplate;
