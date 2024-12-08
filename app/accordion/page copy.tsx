"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ControlledAccordion() {
  const [expanded, setExpanded] = useState(null); // Parent accordéon ouvert
  const [childExpanded, setChildExpanded] = useState(null); // Enfant accordéon ouvert

  // Gestion du changement d'état pour les parents
  const handleParentChange = (panel) => (event, isExpanded) => {
    const isChildOpen = childExpanded !== null; // Vérifie si un enfant est ouvert
    if (expanded === panel && isExpanded && isChildOpen) {
      // Si parent + enfant ouverts => tout plier
      setExpanded(null);
      setChildExpanded(null);
    } else {
      // Sinon, bascule le parent
      setExpanded(isExpanded ? panel : null);
    }
  };

  // Gestion du changement d'état pour les enfants
  const handleChildChange = (panel) => (event, isExpanded) => {
    if (expanded && isExpanded) {
      // Si le parent est déjà ouvert, ouvre l'enfant et ferme les autres
      setExpanded(expanded);
      setChildExpanded(panel);
    } else {
      // Sinon, bascule l'enfant
      setChildExpanded(isExpanded ? panel : null);
    }
  };

  // Vérification pour rendre les autres accordéons invisibles
  const isOtherAccordionVisible = !(
    expanded !== null && childExpanded !== null
  );

  return (
    <div>
      {/* Parent Accordion 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleParentChange("panel1")}
        sx={{ display: isOtherAccordionVisible || expanded === "panel1" ? "block" : "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content">
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>

      {/* Parent Accordion 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleParentChange("panel2")}
        sx={{ display: isOtherAccordionVisible || expanded === "panel2" ? "block" : "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content">
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          {/* Enfant 1 */}
          <Accordion
            expanded={childExpanded === "child1"}
            onChange={handleChildChange("child1")}
            sx={{
              width: "100%",
              display: isOtherAccordionVisible || childExpanded === "child1" ? "block" : "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="child1-content">
              Child Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
          {/* Enfant 2 */}
          <Accordion
            expanded={childExpanded === "child2"}
            onChange={handleChildChange("child2")}
            sx={{
              width: "100%",
              display: isOtherAccordionVisible || childExpanded === "child2" ? "block" : "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="child2-content">
              Child Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      {/* Parent Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleParentChange("panel3")}
        sx={{ display: isOtherAccordionVisible || expanded === "panel3" ? "block" : "none" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content">
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

export default ControlledAccordion;
