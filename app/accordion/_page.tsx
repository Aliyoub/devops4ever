"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Type pour gérer l'état actif
type ActiveState = {
  parent: string | null; // Parent actif
  child: string | null;  // Enfant actif
  grandChild: string | null; // Petit-enfant actif (Quiz ou Lecture)
};

const CustomAccordions: React.FC = () => {
  const [activeState, setActiveState] = useState<ActiveState>({
    parent: null,
    child: null,
    grandChild: null,
  });

  // Gestion de l'ouverture d'un petit-enfant
  const handleGrandChildToggle = (
    parentId: string,
    childId: string,
    grandChildId: string
  ) => {
    setActiveState({
      parent: parentId,
      child: childId,
      grandChild: grandChildId,
    });
  };

  // Gestion de la réinitialisation (quand on referme un Parent)
  const handleParentToggle = (parentId: string) => {
    if (activeState.parent === parentId) {
      // Si le même Parent est réouvert, réinitialiser tout
      setActiveState({ parent: null, child: null, grandChild: null });
    } else {
      // Sinon, ouvrir uniquement ce Parent
      setActiveState({ parent: parentId, child: null, grandChild: null });
    }
  };

  // Vérification de visibilité
  const isParentVisible = (parentId: string): boolean =>
    !activeState.grandChild || activeState.parent === parentId;

  const isChildVisible = (childId: string): boolean =>
    !activeState.grandChild || activeState.child === childId;

  const isGrandChildExpanded = (grandChildId: string): boolean =>
    activeState.grandChild === grandChildId;

  return (
    <Box>
      {["Parent1", "Parent2", "Parent3"].map((parentId) => (
        <Accordion
          key={parentId}
          expanded={activeState.parent === parentId}
          disabled={!isParentVisible(parentId)}
          onChange={() => handleParentToggle(parentId)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{parentId}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {["Child1"].map((childId) => (
              <Accordion
                key={`${parentId}-${childId}`}
                expanded={isChildVisible(`${parentId}-${childId}`)}
                disabled={!isChildVisible(`${parentId}-${childId}`)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{`${childId}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {["Quiz", "Lecture"].map((grandChildId) => (
                    <Accordion
                      key={`${parentId}-${childId}-${grandChildId}`}
                      expanded={isGrandChildExpanded(
                        `${parentId}-${childId}-${grandChildId}`
                      )}
                      onChange={() =>
                        handleGrandChildToggle(
                          parentId,
                          `${parentId}-${childId}`,
                          `${parentId}-${childId}-${grandChildId}`
                        )
                      }
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{grandChildId}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Contenu de {grandChildId} dans {childId} de {parentId}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomAccordions;
