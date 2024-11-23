import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { subjects } from "./kubernetes/data/kubernetes_subjects";
import { questions } from "./kubernetes/questionServices";

export default function AccordionUsage() {
  return (
    <div style={{ overflow: "scroll" }}>
      {subjects.map((subject, index) => (
        <Accordion style={{ overflow: "scroll" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {subject.subjectName}
          </AccordionSummary>
          <>
            {subject.subSubjectsName.map((subSubjectName, index) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  {subSubjectName}
                </AccordionSummary>
              </Accordion>
            ))}
          </>
        </Accordion>
      ))}
    </div>
  );
}
